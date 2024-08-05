import React from 'react';

import {RoutesEnum} from '../constants/routes.contants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanScreen from '../screens/ScanScreen';
import SearchScreen from '../screens/SearchScreen';
import NutritionistScreen from '../screens/NutritionistScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function TabRouter() {
  return (
    <Tab.Navigator initialRouteName={RoutesEnum.SCAN}>
      <Tab.Screen
        name={RoutesEnum.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={RoutesEnum.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={RoutesEnum.SCAN}
        component={ScanScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="camera" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={RoutesEnum.NUTRITIONIST}
        component={NutritionistScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="chat" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={RoutesEnum.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRouter;
