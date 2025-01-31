import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react';

// THIS IS THE MAIN MENU PAGE

const mainMenu = () => {
  return (
    <SafeAreaView style={ style.container }> 
      <Text>Main Menu</Text>
    </SafeAreaView>
  )
}
export default mainMenu

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})