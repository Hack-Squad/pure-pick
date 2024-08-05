import React from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Theme} from '../../theme';
import {backgroundColor, useTheme} from '@shopify/restyle';

function PreviewCapturedImage({
  handleRetakePhoto,
  handleUsePhoto,
  imageSource,
}: {
  handleRetakePhoto: () => void;
  handleUsePhoto: () => void;
  imageSource: string;
}) {
  const theme = useTheme<Theme>();

  return (
    <View style={styles.container}>
      <Image
        style={styles.previewImage}
        source={{
          uri: `file://'${imageSource}`,
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRetakePhoto()}>
          <Text style={styles.buttonText}>Retake Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleUsePhoto()}>
          <Text style={styles.buttonText}>Use Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PreviewCapturedImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
  },
  previewImage: {
    width: '90%',
    height: '50%',
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: 30,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
