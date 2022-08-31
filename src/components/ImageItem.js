import React from 'react';
import { Text, View, Image } from 'react-native';
import { gStyle } from '../styles/style';

export function ImageItem ({ name, author, imgUrl}) {
  return (
    <View style={gStyle.main}>
      <View style={gStyle.imageItem}>
        <Image
          source={{ uri: imgUrl }}
          style={gStyle.imageItemImage}
        />
        
        <View style={gStyle.imageItemDetails}>
          <Text style={gStyle.imageItemDetailsName}>
            {name}
          </Text>
          <Text style={gStyle.imageItemDetailsAuthor}>
            {author}
          </Text>
        </View>
      </View>
    </View>
  );
}