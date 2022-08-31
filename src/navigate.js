import React from 'react';
import ImagesGallery from './components/ImagesGallery';
import { OpenedImage } from './components/OpenedImage'; 

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Image Gallery"
        component={ImagesGallery}
        options={{
          title: 'Main Gallery',
          headerStyle: { backgroundColor: '#4d4d4d', height: 80},
          headerTitleStyle: { color: '#f1dad0', fontWeight: '800' },
        }}
      />
      <Stack.Screen 
        name="OpenedImage"
        component={OpenedImage}
        options={{
          title: 'You choose this image',
          headerStyle: { backgroundColor: '#4d4d4d', height: 80},
          headerTitleStyle: { color: '#f1dad0', fontWeight: '800' },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>;
};