import React from 'react';

import { RoutesEnum } from '../constants/routes.contants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ScanScreen from '../screens/ScanScreen/ScanScreen';

const Tab = createBottomTabNavigator();

function TabRouter() {
  return (
    <Tab.Navigator initialRouteName={RoutesEnum.SCAN}>
      <Tab.Screen name={RoutesEnum.HOME} component={HomeScreen} />
      <Tab.Screen name={RoutesEnum.SCAN} component={ScanScreen} />
      <Tab.Screen name={RoutesEnum.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabRouter;
