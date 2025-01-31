import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react';

// THIS IS THE LOG OUT MODAL

const logOut = () => {
  return (
    <SafeAreaView style={ style.container }> 
      <Text>LogOut</Text>
    </SafeAreaView>
  )
}
export default logOut

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})