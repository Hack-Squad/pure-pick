import React, { useEffect } from 'react';
import ThemedBox from '../../components/ThemedBox';
import {Text, View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { RoutesEnum } from '../../constants/routes.contants';

function Splash() {
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();

  useEffect(() => {
	setTimeout(() => {
	  navigation.navigate(RoutesEnum.HOME_STACK);
	}, 3000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {loading ? (
        <LottieView
          source={require('../../assets/animations/splash.json')}
          autoPlay
          style={{width: '100%', height: '100%'}}
          speed={1}
		  loop={false}
          onAnimationFinish={() => setLoading(false)}
        />
      ) : (
        <Image
          source={require('../../assets/images/splash.png')}
          style={{width: '100%', height: '100%'}}
        />
      )}
    </View>
  );
}

export default Splash;
