// import { SafeAreaView, StyleSheet, Text } from "react-native";
// import { Link } from "expo-router";

// //THIS SERVES AS THE MAIN PAGE.

// const index = () => {
//   return (

//     // safe area view is to make sure the size of the page adjusts to the users devices.
//     <SafeAreaView style={ style.container }> 
//       <Text>WELCOME TO BEE SYNC (KUNYARE LOG IN PAGE)</Text>
//       <Link href={ '/(drawer)/(screens)/calendar' } style={{color: 'red'}}>LOG IN BUTTON KUNO</Link>
//     </SafeAreaView>

//   )
// }
// export default index

// //THIS SERVES AS THE CSS.
// const style = StyleSheet.create ({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// })


// temporary login screen, just to test the token
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async () => {

    const login = {
        user_name: username,
        user_password: password
    }

    try {
      const response = await fetch('http://192.168.1.56:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      });

      if (response.ok) {
        const data = await response.json();
        const jwtToken = data.token; // Assuming the token is returned in the response

        // Store the JWT token in AsyncStorage
        await AsyncStorage.setItem('jwtToken', jwtToken);

        Alert.alert('Success', 'Logged in successfully!');
        // Navigate to the desired screen
        router.push('/(drawer)/(screens)/task');
      } else {
        const errorText = await response.text();
        // console.error('Error response:', response.status, errorText);
        Alert.alert('Error', `Failed to log in: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while logging in.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
