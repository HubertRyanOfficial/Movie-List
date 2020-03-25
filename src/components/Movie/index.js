import React, {useContext} from 'react';

// components

import {
  Container,
  Title,
  YearFilme,
  Description,
  DescriptionText,
  Watchers,
  WatchersIcon,
  WatchersCount,
  Poster,
  ImagePoster,
  Plot,
  Time,
} from './styles';

// modules

import NavigationContext from '../../routes/Home/NavigationContext';

function Movie({item}) {
  const {navigation} = useContext(NavigationContext);

  return (
    <Container
      onPress={() => navigation.navigate('details', {details: item.details})}>
      <Poster>
        <ImagePoster
          source={{
            uri: item.poster,
          }}
          resizeMode="contain"
        />
      </Poster>

      <YearFilme>{item.year}</YearFilme>
      <Title>{item.title}</Title>
      <Time>{item.time}</Time>

      <Plot>{item.plot}</Plot>

      <Description>
        <DescriptionText>Assistindo agora</DescriptionText>
        <Watchers>
          <WatchersIcon source={require('../../../assets/i_watchers.png')} />
          <WatchersCount>{item.watchers}</WatchersCount>
        </Watchers>
      </Description>
    </Container>
  );
}

export default Movie;
// Desenvolvido por Hubert Ryan
