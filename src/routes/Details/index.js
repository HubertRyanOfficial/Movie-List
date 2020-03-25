import React, {useEffect, useState} from 'react';

// components

import {Container} from './styles';

import Header from './Header';
import FilmDetails from './FilmDetails';

// modules

function Details({route, navigation}) {
  const {details} = route.params;

  return (
    <Container>
      <Header title={details.title} navigation={navigation} />
      <FilmDetails data={details} />
    </Container>
  );
}

export default Details;
// Desenvolvido por Hubert Ryan
