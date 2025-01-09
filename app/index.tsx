import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

//THIS SERVES AS THE MAIN PAGE.

const index = () => {
  return (

    // safe area view is to make sure the size of the page adjusts to the users devices.
    <SafeAreaView style={ style.container }> 
      <Text>WELCOME TO BEE SYNC (KUNYARE LOG IN PAGE)</Text>
      <Link href={ '/(drawer)/(screens)/calendar' } style={{color: 'red'}}>LOG IN BUTTON KUNO</Link>
    </SafeAreaView>

  )
}
export default index

//THIS SERVES AS THE CSS.
const style = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
