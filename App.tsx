import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabRouter from './src/navigators/TabRouter';
import { Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabRouter />
    </NavigationContainer>
  );
}

export default App;
