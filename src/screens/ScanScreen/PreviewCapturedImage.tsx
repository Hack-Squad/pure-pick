import React from 'react'
import { View, Image, Button } from 'react-native'

function PreviewCapturedImage({ handleBarcodeScanning, setShowCamera, imageSource }: { handleBarcodeScanning: any, setShowCamera: any, imageSource: any }) {
	return (
		<View>
			<View>
				<Image
					source={{
						uri: `file://'${imageSource}`,
					}}
				/>
				<View>
					<Button title="Use Photo" onPress={() => handleBarcodeScanning()} />
					<Button title="Retake Photo" onPress={() => setShowCamera(true)} />
				</View>
			</View>
		</View>
	)
}

export default PreviewCapturedImage