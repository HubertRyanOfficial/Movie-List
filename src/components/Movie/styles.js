import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  padding: 15px;
`;

export const Poster = styled.View`
  margin-bottom: 10px;
  height: 300px;
`;

export const ImagePoster = styled.Image`
  flex: 1;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Time = styled.Text`
  color: #ed6663;
  font-size: 10px;
`;

export const Plot = styled.Text`
  margin: 20px 0px;
  text-align: justify;
  margin-right: 10px;
  color: #bbb;
`;

export const YearFilme = styled.Text`
  font-size: 10px;
  color: #bbb;
  align-self: flex-end;
`;

export const Description = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const DescriptionText = styled.Text``;
export const Watchers = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const WatchersIcon = styled.Image`
  margin-left: 20px;
`;
export const WatchersCount = styled.Text`
  margin-left: 12px;
`;

// Desenvolvido por Hubert Ryan
