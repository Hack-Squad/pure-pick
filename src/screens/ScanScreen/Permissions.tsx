import React from 'react';
import {CameraPermissionEnum} from '../../hooks/useCamera.hook';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Permissions({
  permissionStatus,
  onRequestPermission,
}: {
  permissionStatus: CameraPermissionEnum;
  onRequestPermission: () => void;
}) {

  const onOpenSettings = () => {
    Linking.openSettings();
  };

  const renderContent = () => {
    switch (permissionStatus) {
      case CameraPermissionEnum.NOT_DETERMINED:
        return (
          <>
            <Text style={styles.title}>Camera Access Needed</Text>
            <Text style={styles.description}>
              We need access to your camera to scan barcodes and take photos.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={onRequestPermission}>
              <Text style={styles.buttonText}>Allow Camera Access</Text>
            </TouchableOpacity>
          </>
        );
      case CameraPermissionEnum.DENIED:
        return (
          <>
            <Text style={styles.title}>Camera Access Denied</Text>
            <Text style={styles.description}>
              You've denied camera access. Please enable it in your device
              settings to use this feature.
            </Text>
            <TouchableOpacity style={styles.button} onPress={onOpenSettings}>
              <Text style={styles.buttonText}>Open Settings</Text>
            </TouchableOpacity>
          </>
        );
      case CameraPermissionEnum.RESTRICTED:
        return (
          <>
            <Text style={styles.title}>Camera Access Restricted</Text>
            <Text style={styles.description}>
              Camera access is restricted on your device. This may be due to
              parental controls or other restrictions.
            </Text>
            <TouchableOpacity style={styles.button} onPress={onOpenSettings}>
              <Text style={styles.buttonText}>Open Settings</Text>
            </TouchableOpacity>
          </>
        );
      case CameraPermissionEnum.GRANTED:
        return (
          <>
            <Text style={styles.title}>Camera Access Granted</Text>
            <Text style={styles.description}>
              You have granted camera access. You can now use the camera
              features.
            </Text>
          </>
        );
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="camera" size={80} />
      {renderContent()}
    </View>
  );
}

export default Permissions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
	width: '100%',
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
