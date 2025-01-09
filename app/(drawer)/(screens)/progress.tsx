import { StyleSheet, Text, SafeAreaView } from 'react-native'

// THIS IS THE PROGRESS PAGE

const progress = () => {
  return (
    <SafeAreaView style={ style.container }> 
      <Text>Progress</Text>
    </SafeAreaView>
  )
}
export default progress

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})