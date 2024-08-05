import React from 'react';
import {View, Text} from 'react-native';
import {createBox, createText, useTheme} from '@shopify/restyle';
import {Theme} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {

  return (
    <View>
      <Text>Home Screen</Text>
	 <Icon name="home" size={30} color="#000" />
    </View>
  );
}

export default HomeScreen;
