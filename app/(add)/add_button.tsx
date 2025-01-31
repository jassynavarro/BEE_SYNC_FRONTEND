import { useState, useCallback } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import Images from '../../constants/images';
import QRCodeModal from '../(add)/qr'; // Import the QR modal component
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';

// THIS IS THE ADD MEMBER PAGE

const AddButton = () => {
  const [qrVisible, setQrVisible] = useState(false);
  const [hiveId, setHiveId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  interface id {
    hiveID: number;
  }

// Fetch the hiveId from the backend API
const fetchHiveId = async () => {
  const jwtToken = await AsyncStorage.getItem('jwtToken');

  if (!jwtToken) {
    Alert.alert('Error', 'No JWT token found. Please log in again.');
    return;
  }

  try {
    const response = await fetch('http://192.168.1.56:8080/HiveMembers/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}` // Include JWT token in the request
      }
    });

    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);

    if (!response.ok) {
      throw new Error(`Failed to fetch hive ID. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response Data:', data);

    const hiveIdFromResponse = data.length > 0 ? data[0].hiveId : null;

    if (hiveIdFromResponse) {
      setHiveId(hiveIdFromResponse);
    } else {
      throw new Error('No hiveId found.');
    }
  } catch (err: any) {
    console.error('Error fetching hive ID:', err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  useFocusEffect(
    useCallback(() => {
      fetchHiveId();
    }, [])
  );


  return (
    <ImageBackground source={Images.Pattern} style={style.background}>
      <SafeAreaView>
        <Image style={style.display_picture} source={Images.DP} />
  
        {/* QR Code Button */}
        <TouchableOpacity 
          style={style.QRbutton} 
          onPress={() => setQrVisible(true)} 
          disabled={loading || error !== null} // Disable button while loading or if there's an error
        >
          <Text style={style.QRbuttonText}>
            {loading ? 'Loading...' : 'Generate your QR'}
          </Text>
        </TouchableOpacity>
  
        <Text style={style.orText}>or</Text>
        <Text style={style.searchText}>Search the Username</Text>
        <TextInput style={style.searchBar} placeholder="Enter username" />
  
        <TouchableOpacity style={style.doneButton} onPress={() => {}}>
          <Text style={style.doneText}>Done</Text>
        </TouchableOpacity>
  
        {/* QR Code Modal */}
        <QRCodeModal 
          visible={qrVisible} 
          onClose={() => setQrVisible(false)} 
          hiveId={hiveId} // Pass the hiveId to the QR modal 
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AddButton;

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFCF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display_picture: {
    alignSelf: 'center',
    marginTop: -30,
    marginBottom: 40,
    height: 130,
    width: 130,
  },
  QRbutton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    backgroundColor: '#FFFFFF',
    height: 70,
    width: 248,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#AFB1B6',
    shadowColor: '#000',
    shadowOpacity: 0,
    elevation: 5,
  },
  QRbuttonText: {
    textAlign: 'center',
    color: '#404040',
    fontSize: 20,
    fontFamily: 'SemiBold',
  },
  orText: {
    textAlign: 'center',
    color: '#61646B',
    fontSize: 20,
    fontFamily: 'Medium',
    marginTop: -70,
    marginBottom: 30,
  },
  searchText: {
    textAlign: 'center',
    color: '#61646B',
    fontSize: 15,
    fontFamily: 'Medium',
    marginBottom: 10,
  },
  searchBar: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    height: 48,
    width: 248,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#404040',
    paddingHorizontal: 10,
  },
  doneButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDB36',
    height: 60,
    width: 260,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#AFB1B6',
    shadowColor: '#000',
    shadowOpacity: 0,
    elevation: 5,
    marginTop: 20,
  },
  doneText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'SemiBold',
  },
});
