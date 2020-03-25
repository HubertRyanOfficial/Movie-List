import React from 'react';

// components

import {FlatList, RefreshControl, View} from 'react-native';
import Movie from '../../components/Movie';

// modules

import {connect} from 'react-redux';

function ListMovies({newData, refreshing, refreshList}) {
  return (
    <FlatList
      data={newData}
      renderItem={({item}) => <Movie item={item} />}
      keyExtractor={(item, index) => String(index)}
      ItemSeparatorComponent={() => <View style={{marginVertical: 2.5}} />}
      contentContainerStyle={{marginTop: 10}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => refreshList()}
          title="Segure para atualizar."
          progressBackgroundColor="#1b262c"
          colors={['#fff']}
        />
      }
      initialNumToRender={5}
      windowSize={8}
      removeClippedSubviews={true}
      maxToRenderperBatch={2}
      showsVerticalScrollIndicator={false}
    />
  );
}

const mapStateToProps = store => ({
  newData: store,
});

export default connect(mapStateToProps)(ListMovies);
// Desenvolvido por Hubert Ryan
