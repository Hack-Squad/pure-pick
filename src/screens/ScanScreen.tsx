import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function ScanScreen({navigation}: any) {
  return (
    <SafeAreaView>
      <Text>Scan screen</Text>
		<Button title="Go to Profile" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
}

export default ScanScreen;
