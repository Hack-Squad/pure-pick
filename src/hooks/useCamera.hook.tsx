import React, {useRef, useState} from 'react';

import {Camera, useCameraDevice} from 'react-native-vision-camera';

export enum CameraPermissionEnum {
  GRANTED = 'granted',
  NOT_DETERMINED = 'not-determined',
  DENIED = 'denied',
  RESTRICTED = 'restricted',
}

export default function useCameraHook() {
  const cameraRef = useRef(null);
  const device = useCameraDevice('back');
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');

  const getPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
  };

  const getPermissionStatus = () => {
		return Camera.getCameraPermissionStatus()
 }

  const capturePhoto = async () => {
    if (cameraRef.current !== null) {
      const photo = await cameraRef.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
    }
  };

  return {
    cameraRef,
    device,
    showCamera,
    imageSource,
    setShowCamera,
    setImageSource,
    getPermission,
    capturePhoto,
	getPermissionStatus
  };
}
