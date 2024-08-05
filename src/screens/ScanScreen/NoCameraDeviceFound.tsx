import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoCameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>No camera device found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
	width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
	padding: 20,
  },
  message: {
    fontSize: 18,
    color: '#333',
  },
});

export default NoCameraScreen;