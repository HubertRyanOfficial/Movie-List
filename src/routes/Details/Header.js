import React, {memo} from 'react';

// components

import {
  HeaderContainer,
  HeaderTitle,
  HeaderButton,
  HeaderIconContainer,
  HeaderIcon,
} from './styles';

// modules

function Header({title, navigation}) {
  return (
    <HeaderContainer>
      <HeaderButton onPress={() => navigation.navigate('home')}>
        <HeaderIconContainer>
          <HeaderIcon source={require('../../../assets/i_back.png')} />
        </HeaderIconContainer>
      </HeaderButton>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}

export default memo(Header);
// Desenvolvido por Hubert Ryan
