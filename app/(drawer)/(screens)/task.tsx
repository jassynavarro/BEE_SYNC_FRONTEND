import { SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react';
import Images from '../../../constants/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useFocusEffect } from 'expo-router';

// THIS IS THE HIVEMATE'S TASK LIST PAGE

const HiveMembersScreen = () => {
  const [members, setMembers] = useState<HiveMember[]>([]); // Specify type for state
  const [error, setError] = useState<string | null>(null);

  interface HiveMember {
    userId: number;
    username: string;
    img_path: string;
  }
  
  // Fetch Hive Members from the API
  const fetchHiveMembers = async () => {

    const jwtToken = await AsyncStorage.getItem('jwtToken');

    if (!jwtToken) {
      Alert.alert('Error', 'No JWT token found. Please log in again.');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.56:8080/HiveMembers/membersInfo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}` // Send the JWT token in the header
        }});
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray(data) || data.length === 0) {
        console.log('No hive members found.');
      } else {
        console.log('Hive Members:', data);
        setMembers(data);
      }
    } catch (err: unknown) {
      console.error('Error:', err);
      setError((err as Error).message); // Safely handle unknown error type
    }
  };

  // refresh once users edited their profile, it will immeditaely reflect in this page
  useFocusEffect(
    useCallback(() => {
      fetchHiveMembers();
    }, [])
  );

  // route push ng view task page
  // const viewTaskPress = (userId: number) => {
  //   router.push(`/ViewTask_Screen?userId=${userId}`);
  //   console.log(userId);
  // };

  return (
    <ImageBackground source={Images.Pattern} style={style.background}>
      <SafeAreaView>
        <ScrollView style={style.scrollView}>
          {members.map((member) => (
            <SafeAreaView key={member.userId} style={style.boxes}>
              <Image style={style.profile} source={{ uri: member.img_path }} />
              <Text style={style.name}>{member.username}</Text>
              <TouchableOpacity style={style.button} onPress={() => {}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={style.button} onPress={() => viewTaskPress(member.userId)}> ito ipapalit kapag meron na nung viewTask page
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity> */}
            </SafeAreaView>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default HiveMembersScreen;

const style = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15
  },
  background: {
    flex: 1,
    backgroundColor: '#FFFCF0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxes: {
    width: 320,
    height: 70,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    borderColor: '#AFB1B6',
    borderWidth: 1.5,
  },
  profile: {
    alignSelf: 'flex-start',
    marginLeft: 7,
    marginTop: 8,
    height: 50,
    width: 50
  },
  name: {
    fontFamily: 'Bold',
    fontSize: 18,
    color: '#61646B',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: -38,
    marginLeft: 70,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -31,
    marginRight: -200,    
    backgroundColor: '#FFDB36',
    height: 35,
    width: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,   
    fontFamily: 'Medium',
    marginLeft: 12
  }
})
