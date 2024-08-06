import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabRouter from './src/navigators/TabRouter';
import {ThemeProvider} from '@shopify/restyle';
import {darkTheme} from './src/theme';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationContainer>
        <TabRouter />
      </NavigationContainer>
      <Toast />
    </ThemeProvider>
  );
}

export default App;
