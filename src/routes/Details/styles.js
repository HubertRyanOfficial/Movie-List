import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f5;
`;

export const HeaderContainer = styled.View`
  background-color: #fff;
  elevation: 1;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderButton = styled.TouchableWithoutFeedback``;

export const HeaderIconContainer = styled.View`
  padding: 10px;
`;
export const HeaderIcon = styled.Image``;
export const HeaderTitle = styled.Text`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  max-width: 300px;
`;

export const FilmeContainer = styled.View`
  padding: 20px;
  background-color: #fff;
  margin-top: 10px;
  elevation: 1;
`;

export const FilmeTop = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Poster = styled.View`
  width: 170px;
  height: 300px;
`;

export const PosterImage = styled.Image`
  flex: 1;
  border-radius: 8px;
`;

export const FilmeInformations = styled.View`
  margin-left: 20px;
`;

export const FilmeInfoTitle = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const FilmeInfoText = styled.Text`
  text-align: justify;
  max-width: 180px;
  margin-bottom: 20px;
`;

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RatingText = styled.Text`
  font-weight: bold;
  color: #000;
`;

export const RatingIcon = styled.Image`
  margin-left: 20px;
`;

export const FilmeBottom = styled.View`
  margin-top: 20px;
`;

export const GenreTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const Genres = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const Genre = styled.Text`
  background-color: #ff7272;
  padding: 5px 20px;
  margin-top: 5px;
  margin-right: 10px;
  color: #fff;
  border-radius: 20px;
`;
