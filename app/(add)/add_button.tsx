import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity, Alert, Modal } from 'react-native';
import Images from '../../constants/images';
import QRCodeModal from './qr'; // Import the QR modal component
import QRScannerModal from './scanner'; // Import the QR scanner component
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddButton = () => {
  const [qrVisible, setQrVisible] = useState(false);
  const [scannerVisible, setScannerVisible] = useState(false); // State for scanner modal
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  const [adminId, setAdminId] = useState<string | null>(null); // State for admin ID
  const[adminToken, setAdminToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdminId = async () => {
      try {
        const jwtToken = await AsyncStorage.getItem('jwtToken');
        console.log('JWT Token:', jwtToken);
        if (jwtToken) {
          const tokenParts = jwtToken.split('.');
          if (tokenParts.length === 3) {
            const decodedToken = JSON.parse(atob(tokenParts[1])); 
            console.log('Decoded Token:', decodedToken);
            setAdminId(decodedToken.sub); 
            setAdminToken(jwtToken);
          }
        }
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    };
    fetchAdminId();
  }, []);

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

  const generateQrContent = () => {
    if (!adminId) return null;
    return JSON.stringify({ adminId, adminToken }); // Return adminId and adminToken as JSON string
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

        {/* QR Scanner Button */}
        <TouchableOpacity style={style.scanButton} onPress={() => setScannerVisible(true)}>
          <Text style={style.scanButtonText}>Scan QR Code</Text>
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
          qrContent={generateQrContent() || "Loading..."} // Show loading text until adminId is available
        />

        <Modal visible={scannerVisible} animationType="slide">
          <QRScannerModal onScan={(data: string) => { // Explicitly type data
            setUsername(data);
            setScannerVisible(false);
          }} />
          <TouchableOpacity style={style.closeScanner} onPress={() => setScannerVisible(false)}/>
        </Modal>


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
    marginBottom: 20,
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
  scanButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#FFDB36',
    height: 50,
    width: 220,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#AFB1B6',
    shadowColor: '#000',
    shadowOpacity: 0,
    elevation: 5,
  },
  scanButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'SemiBold',
  },
  orText: {
    textAlign: 'center',
    color: '#61646B',
    fontSize: 20,
    fontFamily: 'Medium',
    marginTop: -10,
    marginBottom: 20,
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
  closeScanner: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeText: {
    color: 'red',
    fontSize: 18,
  }
});
