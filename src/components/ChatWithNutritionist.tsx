import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import {normalize} from '../styles';
import {RoutesEnum} from '../constants/routes.contants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

function ChatWithNutritionist() {
  const navigation = useNavigation();
  const shineAnim = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    const animate = () => {
      shineAnim.setValue(-1);
      Animated.loop(
        Animated.timing(shineAnim, {
          toValue: 1,
          duration: 2000, // Duration of the shine effect
          useNativeDriver: true,
        }),
      ).start();
    };
    animate();
  }, [shineAnim]);

  const translateX = shineAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: [-width, width],
  });
  return (
    <TouchableOpacity
      style={styles.chatButton}
      onPress={() => navigation.navigate(RoutesEnum.NUTRITIONIST)}>
      <Text style={styles.chatButtonText}>Chat with AI Nutritionist</Text>
      <Icon name="arrow-forward" color={'#fff'} size={20} />

      {/* Shine Effect */}
      <Animated.View
        style={[
          styles.shineContainer,
          {
            transform: [{translateX}],
          },
        ]}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0)',
            'rgba(255,255,255,0.4)',
            'rgba(255,255,255,0)',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.linearGradient}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

export default ChatWithNutritionist;

const styles = StyleSheet.create({
  chatButton: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(15),
    marginVertical: normalize(15),
    borderRadius: normalize(10),
  },
  chatButtonText: {
    color: 'white',
    fontSize: normalize(16),
  },
  arrowIcon: {
    color: 'white',
    fontSize: normalize(10),
  },
  shineContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width,
    transform: [{rotate: '30deg'}],
  },
  linearGradient: {
    flex: 1,
    width: '70%', // Width of the shine
  },
});
