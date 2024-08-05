import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoutesEnum } from '../constants/routes.contants';

const Stack = createNativeStackNavigator();

import ProductDetail from '../screens/ProductDetail';


function StackRouter() {
  return (
	<Stack.Navigator>
	  <Stack.Screen
		name={RoutesEnum.PRODUCT_DETAILS}
		component={ProductDetail}
	  />
	</Stack.Navigator>
  )
}

export default StackRouter