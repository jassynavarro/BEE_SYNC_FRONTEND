import { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import Images from '../../constants/images';
import QRCodeModal from '../(add)/qr'; // Import the QR modal component
import AsyncStorage from '@react-native-async-storage/async-storage';

// THIS IS THE ADD MEMBER PAGE

const AddButton = () => {
  //use state variables
  const [qrVisible, setQrVisible] = useState(false);
  const [hiveId, setHiveId] = useState<number | null>(null);
  const [loading, setLoading]  =  useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');

 
 // Function to handle adding a member to the hive
 const addMemberToHive = async () => {
  const jwtToken = await AsyncStorage.getItem('jwtToken');

  if (!jwtToken) {
    Alert.alert('Error', 'No JWT token found. Please log in again.');
    return;
  }

  try {
    const response = await fetch('http://192.168.0.102:8080/HiveMembers/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}` // Include JWT token in the request
      },
      body: JSON.stringify({ memberUsername: username })
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // Get the error message from backend
      throw new Error(`Failed to add member: ${errorMessage}`);
    }

    const result = await response.text(); // Handle response as text
    Alert.alert('Success', result);
  } catch (err: any) {
    Alert.alert('Error', err.message);
  }


};
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
        <Text style={style.searchText}>Add the Username</Text>
        <TextInput 
          style={style.searchBar} 
          placeholder="Enter username" 
          value={username} 
          onChangeText={setUsername} // Update username state on input change
        />

        <TouchableOpacity style={style.doneButton} onPress={addMemberToHive}>
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