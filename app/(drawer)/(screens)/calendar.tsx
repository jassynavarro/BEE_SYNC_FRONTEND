import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { useRouter } from 'expo-router';;
import Images from '../../../constants/images';

// THIS IS THE CALENDAR PAGE

const calendar = () => {
  const router = useRouter(); // Get the router object
  return (
    <SafeAreaView > 
      <TouchableOpacity style={style.container} onPress={()=>router.push('/(add)/add_button')}>
        <Image source={Images.Add}></Image>
      </TouchableOpacity>
    </SafeAreaView>
    
  )
}
export default calendar

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 40,
    marginTop: 430,
    marginLeft: 20
  },
})