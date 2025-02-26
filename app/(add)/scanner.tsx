import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // ✅ Import AsyncStorage
import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';

type QRScannerProps = {
  onScan: (data: string) => void; // Define onScan prop
};

const QRScanner: React.FC<QRScannerProps> = ({ onScan }) => { // Receive onScan as prop
  const [scanned, setScanned] = useState(false);
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return <View />;
  }

  // styling first to sustain component
  const styles = StyleSheet.create({
    message: {
      textAlign: 'center',
      margin: 20,
      fontSize: 16,
      color: '#000',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    overlay: {
      position: 'absolute',
      bottom: 50, 
      width: '100%',
      alignItems: 'center',
    },
    closeButton: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    closeText: {
      color: '#fff',
      fontSize: 18,
    },
    scanAgain: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 10,
    },
    scanAgainText: {
      color: '#fff',
      fontSize: 18,
    },
  });

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleBarCodeScanned = async ({ data }: BarcodeScanningResult) => {
    setScanned(true);
    try {
      const parsedData = JSON.parse(data);
      if (!parsedData.adminId) throw new Error('Invalid QR Code');

      const jwtToken = await AsyncStorage.getItem('jwtToken');
      if (!jwtToken) {
        Alert.alert('Error', 'No JWT token found. Please log in again.');
        return;
      }

      // decoding jwt token
      const tokenParts = jwtToken.split('.');
      if (tokenParts.length === 3) {
        const decodedToken = JSON.parse(atob(tokenParts[1]));
        const userId = decodedToken.sub; 
        console.log('Decoded Token:', decodedToken);

        // API to join the hive
        await joinHive(parsedData.adminId, userId, parsedData.adminToken);
      }

    } catch (error) {
      Alert.alert('Error', 'Invalid QR Code scanned.');
    } finally {
      setScanned(false);
    }
  };

  //  triggers joining the hive
  const joinHive = async (adminId: string, userId: string, jwtToken: string) => {
    try {
      const response = await fetch('http://192.168.0.102:8080/HiveMembers/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({
          adminUserId: adminId,
          memberId: Number(userId), // extracted id from jwt token
        })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to join: ${errorMessage}`);
      }

      Alert.alert('Success', 'You have successfully joined the hive.');
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <CameraView
      ref={cameraRef}
      style={{ flex: 1 }}
      facing={facing}
      onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
    >
      {scanned && (
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.scanAgain} onPress={() => setScanned(false)}>
            <Text style={styles.scanAgainText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </CameraView>
  );
};

export default QRScanner;
