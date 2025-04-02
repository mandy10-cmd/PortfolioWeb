import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, useCameraDevices, CameraPermissionStatus } from 'react-native-vision-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.find(d=> d.position==='back');
  const cameraRef = useRef(null);

  
  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission: CameraPermissionStatus = await Camera.requestCameraPermission();
      const microphonePermission: CameraPermissionStatus = await Camera.requestMicrophonePermission();

      // Check if both permissions are 'authorized'
      if (cameraPermission === 'granted' && microphonePermission === 'granted') {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    };

    requestPermissions();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      console.log(photo.path);
    }
  };

  if (device == null || !hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Loading camera...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={cameraRef}
        photo={true} // Enable photo capture
      />
      <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  captureButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CameraScreen;


