import { SafeAreaView, StyleSheet, Text } from 'react-native'

// THIS IS THE PROFILE PAGE

const profile = () => {
  return (
    <SafeAreaView style={ style.container }> 
      <Text>Profile</Text>
    </SafeAreaView>
  )
}
export default profile

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})