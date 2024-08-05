import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

function Permissions() {
	return (
		<View>
			<Text>Camera not available</Text>
			<Button
				title="Go to settings"
				onPress={() => Linking.openSettings()}
			/>
		</View>
	);
}

export default Permissions;
