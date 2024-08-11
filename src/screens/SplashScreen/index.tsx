import React, {useEffect} from 'react';
import ThemedBox from '../../components/ThemedBox';
import {Text, View, Image} from 'react-native';
import LottieView from 'lottie-react-native';

function Splash({setIsSplashLoaded}: {setIsSplashLoaded: Function}) {
  const [loading, setLoading] = React.useState(true);

  const onAnimationFinish = () => {
    setLoading(false);

    setTimeout(() => {
      setIsSplashLoaded(true);
    }, 1500);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {loading ? (
        <LottieView
          source={require('../../assets/animations/splash.json')}
          autoPlay
          style={{width: '100%', height: '100%'}}
          speed={1}
          loop={false}
          onAnimationFinish={onAnimationFinish}
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
