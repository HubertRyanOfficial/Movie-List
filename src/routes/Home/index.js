import React, {useEffect, useState, useCallback} from 'react';

// componentes

import {
  Container,
  HeaderContainer,
  HeaderTitle,
  HeaderTextContainer,
  HeaderText,
  ListContainer,
  Loader,
  HeaderDeveloper,
} from './styles';

import ListMovies from './ListMovies';

// modules

import {api, apiOmd} from '../../config/api';
import {moviesActions} from '../../config/actions';
import {asyncForEach} from '../../utils/asyncForEach';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavigationContext from './NavigationContext';

function Home({navigation, moviesActions}) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getInitialDatas();
  }, []);

  const getInitialDatas = useCallback(async () => {
    try {
      const response = await api.get('/movies/trending');
      const data = response.data;

      let listMovies = [];

      await asyncForEach(data, async movieEach => {
        let imdb = movieEach.movie.ids.imdb;

        const movieData = (await apiOmd.get(`/?i=${imdb}&apikey=36784979`))
          .data;

        listMovies.push({
          title: movieEach.movie.title,
          year: movieEach.movie.year,
          watchers: movieEach.watchers,
          poster: movieData.Poster,
          plot: movieData.Plot,
          time: movieData.Runtime !== 'N/A' ? movieData.Runtime : '',
          details: {
            title: movieEach.movie.title,
            poster: movieData.Poster,
            director: movieData.Director,
            writer: movieData.Writer,
            actors: movieData.Actors,
            genres: movieData.Genre,
            rating: movieData.imdbRating,
          },
        });
      });

      moviesActions(listMovies);
      setLoading(false);
      setRefreshing(false);
    } catch (e) {
      console.log(e);

      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const refreshList = useCallback(() => {
    if (!refreshing) {
      setRefreshing(true);
      getInitialDatas();
    }
  }, [moviesActions]);

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Filmes</HeaderTitle>
        <HeaderTextContainer>
          <HeaderText>Filmes em destaque.</HeaderText>
        </HeaderTextContainer>
        <HeaderDeveloper>Desenvolvido por Hubert Ryan</HeaderDeveloper>
      </HeaderContainer>

      <ListContainer>
        {loading && <Loader />}

        <NavigationContext.Provider value={{navigation}}>
          <ListMovies refreshing={refreshing} refreshList={refreshList} />
        </NavigationContext.Provider>
      </ListContainer>
    </Container>
  );
}

const mapStateToProps = store => ({
  newData: store,
});

const mapActionsToProps = dispatch =>
  bindActionCreators({moviesActions}, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(Home);
// Desenvolvido por Hubert Ryan
