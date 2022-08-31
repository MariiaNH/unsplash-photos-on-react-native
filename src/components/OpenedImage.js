import React from 'react';
import { View, Image } from 'react-native';
import { gStyle } from '../styles/style';

export function OpenedImage ({ route }) {
  return (
    <View style={gStyle.main}>
      <Image
        source={{ uri: route.params.imgUrl }}
        style={{ width: '100%', height: '100%'}}
      />
    </View>
  );
}