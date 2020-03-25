import React from 'react';

// components

import {
  FilmeContainer,
  FilmeTop,
  Poster,
  PosterImage,
  FilmeInformations,
  FilmeInfoTitle,
  FilmeInfoText,
  Rating,
  RatingText,
  RatingIcon,
  FilmeBottom,
  GenreTitle,
  Genres,
  Genre,
} from './styles';

// modules

function FilmeDetails({data}) {
  const genres = data.genres.split(',');

  return (
    <FilmeContainer>
      <FilmeTop>
        <Poster>
          <PosterImage
            source={{
              uri: data.poster,
            }}
            resizeMode="contain"
          />
        </Poster>

        <FilmeInformations>
          <FilmeInfoTitle>Direção</FilmeInfoTitle>
          <FilmeInfoText>{data.director}</FilmeInfoText>
          <FilmeInfoTitle>Escritores</FilmeInfoTitle>
          <FilmeInfoText>{data.writer}</FilmeInfoText>
          <FilmeInfoTitle>Atores</FilmeInfoTitle>
          <FilmeInfoText>{data.actors}</FilmeInfoText>
          <FilmeInfoText>Avaliação</FilmeInfoText>
          <Rating>
            <RatingText>
              {data.rating !== 'N/A' ? data.rating : '---'}
              {data.rating !== 'N/A' && (
                <RatingIcon source={require('../../../assets/i_star.png')} />
              )}
            </RatingText>
          </Rating>
        </FilmeInformations>
      </FilmeTop>

      <FilmeBottom>
        <GenreTitle>Gêneros</GenreTitle>
        <Genres>
          {genres.map((element, index) => (
            <Genre key={index}>{element.trim()}</Genre>
          ))}
        </Genres>
      </FilmeBottom>
    </FilmeContainer>
  );
}

export default FilmeDetails;
// Desenvolvido por Hubert Ryan
