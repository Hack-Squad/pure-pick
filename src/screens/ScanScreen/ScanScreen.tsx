import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import useCameraHook, {CameraPermissionEnum} from '../../hooks/useCamera.hook';
import {styles} from './styles';
import ThemedBox from '../../components/ThemedBox';
import {useTheme} from '@shopify/restyle';
import MlKitUtil from '../../utils/mlkit.util';
import {firestoreService} from '../../service/firestore.service';
import { FirestoreCollectionsEnum } from '../../constants/firestore-collections.constants';

// ask for permission
// if permission granted, show camera
// if permission denied, show error message and button to go to settings
// if permission not determined, show button to ask for permission
// if permission restricted, show error message and button to go to settings

function ScanScreen() {
  const {
    cameraRef,
    device,
    showCamera,
    imageSource,
    setShowCamera,
    setImageSource,
    getPermission,
    capturePhoto,
    getPermissionStatus,
  } = useCameraHook();
  const currentCameraPermission = getPermissionStatus();
  const {spacing} = useTheme();

  useEffect(() => {
    getPermission();
  }, []);

  const handleBarcodeScanning = async () => {
    console.log('Getting all collections');
    const barcodes = await MlKitUtil.scanBarcode(`file://'${imageSource}`);
    console.log(barcodes);
	if(barcodes?.[0]?.value){
		const product = await firestoreService.getDocument(FirestoreCollectionsEnum.BRANDED_FOODS_US, barcodes[0].value);
		console.log(product);
	}
  };

 

  return (
    <ThemedBox>
      {device === null ? (
        <React.Fragment>
          <Text>Camera not available</Text>
          <Button
            title="Go to settings"
            onPress={() => Linking.openSettings()}
          />
        </React.Fragment>
      ) : imageSource !== '' ? (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `file://'${imageSource}`,
            }}
          />
          <View style={styles.buttonContainer}>
            <Button title="Use Photo" onPress={() => handleBarcodeScanning()} />
            <Button title="Retake Photo" onPress={() => setShowCamera(true)} />
          </View>
        </View>
      ) : (
        <React.Fragment>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true || showCamera}
            photo={true}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}
            />
          </View>
        </React.Fragment>
      )}
    </ThemedBox>
  );
}

export default ScanScreen;
