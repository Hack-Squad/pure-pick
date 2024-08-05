import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabRouter from './src/navigators/TabRouter';
import {backgroundColor, ThemeProvider} from '@shopify/restyle';
import {darkTheme} from './src/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationContainer>
        <TabRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
