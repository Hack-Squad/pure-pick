import React from 'react';
import {Image, StyleSheet} from 'react-native';
import ThemedBox from '../../components/ThemedBox';
import {normalize} from '../../styles';

function ProfileScreen() {
  return (
    <ThemedBox style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/coming-soon.png')}
      />
    </ThemedBox>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(10),
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
