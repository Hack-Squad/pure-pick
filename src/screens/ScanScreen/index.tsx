import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
  Animated,
} from 'react-native';
import PreviewCapturedImage from './PreviewCapturedImage';
import Permissions from './Permissions';
import {Camera, useFrameProcessor} from 'react-native-vision-camera';
import useCameraHook, {CameraPermissionEnum} from '../../hooks/useCamera.hook';
import {styles} from './styles';
import ThemedBox from '../../components/ThemedBox';
import {useTheme} from '@shopify/restyle';
import MlKitUtil from '../../utils/mlkit.util';
import {firestoreService} from '../../service/firestore.service';
import {FirestoreCollectionsEnum} from '../../constants/firestore-collections.constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RoutesEnum} from '../../constants/routes.contants';

enum CameraModeEnum {
  BARCODE = 'barcode',
  PHOTO = 'photo',
}

enum FlashModeEnum {
  AUTO = 'auto',
  ON = 'on',
  OFF = 'off',
}
// ask for permission
// if permission granted, show camera
// if permission denied, show error message and button to go to settings
// if permission not determined, show button to ask for permission
// if permission restricted, show error message and button to go to settings

function ScanScreen({navigation}: {navigation: any}) {
  const {spacing} = useTheme();
  const [cameraMode, setCameraMode] = useState(CameraModeEnum.BARCODE);
  const [flashMode, setFlashMode] = useState(FlashModeEnum.AUTO);
  const [capturing, setCapturing] = useState(false);
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
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    getPermission();
  }, []);

  const handleBarcodeScanning = async () => {
    console.log('Getting all collections');
    const barcodes = await MlKitUtil.scanBarcode(`file://'${imageSource}`);
    console.log(barcodes);
    if (barcodes?.[0]?.value) {
      const product = await firestoreService.getDocument(
        FirestoreCollectionsEnum.BRANDED_FOODS_US,
        barcodes[0].value,
      );
      console.log(product);
    }
  };

  const handleFlashMode = () => {
    if (flashMode === FlashModeEnum.AUTO) {
      setFlashMode(FlashModeEnum.ON);
    } else if (flashMode === FlashModeEnum.ON) {
      setFlashMode(FlashModeEnum.OFF);
    } else {
      setFlashMode(FlashModeEnum.AUTO);
    }
  };

  const handleCapture = async () => {
    if (!device) return;

    setCapturing(true);

    // Trigger animation
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1.2,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();

    capturePhoto();

    setCapturing(false);
  };

  return (
    <ThemedBox style={styles.container}>
      {device === null ? (
        <Permissions />
      ) : imageSource !== '' ? (
        <PreviewCapturedImage
          handleBarcodeScanning={handleBarcodeScanning}
          setShowCamera={setShowCamera}
          imageSource={imageSource}
        />
      ) : (
        <React.Fragment>
          <View style={[styles.cameraContainer,CameraModeEnum.PHOTO === cameraMode ? styles.cameraContainerPhoto : styles.cameraContainerBarcode]}>
            <Camera
              ref={cameraRef}
              style={styles.preview}
              device={device}
              isActive={true || showCamera}
              photo={true}
              flash={flashMode}
            />
          </View>

          <Animated.View
            style={[
              styles.captureButtonContainer,
              {transform: [{scale: scaleAnim}]},
            ]}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={handleCapture}
            />
          </Animated.View>

          <View style={styles.headerButtons}>
            <View>
              <Icon
                name="close"
                size={30}
                color="#fff"
                onPress={() => {
                  navigation.navigate(RoutesEnum.HOME);
                }}
              />
            </View>

            <View>
              <Icon
                name={
                  flashMode === FlashModeEnum.ON
                    ? 'flash-on'
                    : flashMode === FlashModeEnum.OFF
                    ? 'flash-off'
                    : 'flash-auto'
                }
                size={30}
                color="#fff"
                onPress={handleFlashMode}
              />
            </View>
          </View>

          {cameraMode === 'barcode' && (
            <Text style={styles.instructions}>
              Point your camera at a barcode
            </Text>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                cameraMode === CameraModeEnum.PHOTO && styles.activeButton,
              ]}
              onPress={() => setCameraMode(CameraModeEnum.PHOTO)}>
              <Text style={styles.buttonText}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                cameraMode === CameraModeEnum.BARCODE && styles.activeButton,
              ]}
              onPress={() => setCameraMode(CameraModeEnum.BARCODE)}>
              <Text style={styles.buttonText}>Barcode</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      )}
    </ThemedBox>
  );
}

export default ScanScreen;
