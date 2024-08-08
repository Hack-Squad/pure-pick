import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {RoutesEnum} from '../constants/routes.contants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanScreen from '../screens/ScanScreen';
import SearchScreen from '../screens/SearchScreen';
import NutritionistScreen from '../screens/NutritionistScreen';
import ProductDetail from '../screens/ProductDetail';
import ProductList from '../screens/ProductList';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen options={{headerShown: false}} name={RoutesEnum.HOME} component={HomeScreen} />
      <Stack.Screen name={RoutesEnum.PRODUCT_LIST} component={ProductList} />
      <Stack.Screen
        name={RoutesEnum.PRODUCT_DETAILS}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

const ScanStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name={RoutesEnum.SCAN} component={ScanScreen} />
      <Stack.Screen
        name={RoutesEnum.PRODUCT_DETAILS}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

const CustomTabBar = (props: any) => {
  const getIconName = (routeName: string) => {
    switch (routeName) {
      case RoutesEnum.HOME_STACK:
        return 'home';
      case RoutesEnum.SEARCH:
        return 'search';
      case RoutesEnum.SCAN_STACK:
        return 'camera';
      case RoutesEnum.NUTRITIONIST:
        return 'chat';
      case RoutesEnum.PROFILE:
        return 'person';
      default:
        return 'home';
    }
  };

  const getTabName = (routeName: string) => {
    switch (routeName) {
      case RoutesEnum.HOME_STACK:
        return 'Home';
      case RoutesEnum.SEARCH:
        return 'Search';
      case RoutesEnum.SCAN_STACK:
        return 'Scan';
      case RoutesEnum.NUTRITIONIST:
        return 'Nutritionist';
      case RoutesEnum.PROFILE:
        return 'Profile';
      default:
        return 'Home';
    }
  };

  const onPress = (routeName: string) => {
    props.navigation.navigate(routeName);
  };

  return (
    <View style={styles.customTabBar}>
      {props.state.routes.map((route: any, index: any) => (
        <TouchableOpacity key={index} onPress={() => onPress(route.name)}>
          <View style={styles.tabItem}>
            <Icon
              name={getIconName(route.name)}
              size={24}
              color={props.state.index === index ? 'tomato' : 'gray'}
            />
            <Text
              style={{color: props.state.index === index ? 'tomato' : 'gray'}}>
              {getTabName(route.name)}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  customTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  tabItem: {
    alignItems: 'center',
  },
});

function TabRouter() {
  return (
    <Tab.Navigator
      initialRouteName={RoutesEnum.SCAN}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerTitleAlign: 'center'}}>
      <Tab.Screen
        name={RoutesEnum.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerShown: false,
          title: 'Home',
        }}
      />

      {/* <Tab.Screen
        name={RoutesEnum.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
          title: 'Search',
        }}
      /> */}

      <Tab.Screen
        name={RoutesEnum.SCAN_STACK}
        component={ScanStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="camera" size={size} color={color} />
          ),
          headerShown: false,
          title: 'Scan',
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
