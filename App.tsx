import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabRouter from './src/navigators/TabRouter';
import {ThemeProvider} from '@shopify/restyle';
import {darkTheme} from './src/theme';
import Toast from 'react-native-toast-message';
import SplashScreen from './src/screens/SplashScreen';

function App(): React.JSX.Element {
  const [isSplashLoaded, setIsSplashLoaded] = React.useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      {isSplashLoaded ? (
        <React.Fragment>
          <NavigationContainer>
            <TabRouter />
          </NavigationContainer>
          <Toast />
        </React.Fragment>
      ) : (
        <SplashScreen setIsSplashLoaded={setIsSplashLoaded} />
      )}
    </ThemeProvider>
  );
}

export default App;
