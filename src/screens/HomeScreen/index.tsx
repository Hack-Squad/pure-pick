import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {createBox, createText, useTheme} from '@shopify/restyle';
import {Theme} from '../../theme';
import ThemedBox from '../../components/ThemedBox';
import ProductCard from '../../components/ProductCard';
import {RoutesEnum} from '../../constants/routes.contants';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <ThemedBox>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(RoutesEnum.PRODUCT_LIST)}>
        <Text>Press here for Products Page</Text>
      </TouchableOpacity>
    </ThemedBox>
  );
}

export default HomeScreen;
