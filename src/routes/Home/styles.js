import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f5;
`;

export const HeaderContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  border-color: #ddd;
  elevation: 1;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

export const HeaderTextContainer = styled.View`
  background-color: #1b262c;
  align-self: flex-start;
  padding: 2px 20px;
  border-radius: 15px;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const HeaderDeveloper = styled.Text`
  color: #bbb;
  font-size: 8px;
  margin-top: 5px;
  margin-left: 20px;
`;

export const ListContainer = styled.View`
  flex: 1;
`;

export const Loader = styled.ActivityIndicator.attrs(() => ({
  size: 'large',
  color: '#4381ff',
}))`
  margin-top: 50px;
`;

// Desenvolvido por Hubert Ryan
