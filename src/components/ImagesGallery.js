import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { gStyle } from '../styles/style';
import { ImageItem } from './ImageItem';

export default function ImagesGallery({ navigation }) {
  const [images, setImages] = useState([]);

  const getImages = () => {
    const url = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

    fetch(url)
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch(() => alert('Photos not loaded'))
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>
        Choose an image you like
      </Text>
      <FlatList
        data={images}
        renderItem={({ item }) => {
         return (
          <TouchableOpacity onPress={() => {
            navigation.navigate('OpenedImage', { imgUrl: item.urls.regular })
          }}>
            <ImageItem 
              key={item.id}
              name={item.description} 
              author={item.user.name} 
              imgUrl={item.urls.regular} 
            />
          </TouchableOpacity>
         );
        }}
      />
    </View>
  );
}