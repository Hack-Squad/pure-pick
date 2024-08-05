import React from 'react';
import {View, Text} from 'react-native';
import {createBox, createText, useTheme} from '@shopify/restyle';
import {Theme} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemedBox from '../../components/ThemedBox';

function HomeScreen() {

  return (
    <ThemedBox>

     <Text>Home Screen</Text>
	 <Icon name="home" size={30} color="#000" />
    		</ThemedBox>

  );
}

export default HomeScreen;
