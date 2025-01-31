import { Stack } from 'expo-router'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { useRouter } from 'expo-router';;
import Images from '../../constants/images';

// THIS IS THE MAIN LAYOUT OF ADD BUTTON

const addButton_layout = () => {
  const router = useRouter(); // Get the router object
  return (
    <Stack screenOptions={{
      headerShown: false,
      header: () => (
        <SafeAreaView style={style.header}>
          <Text style={style.header_Text}>Add Member</Text>
          <TouchableOpacity style={style.back_button} onPress={()=>router.push('/(drawer)/(screens)/calendar')}>
            <Image source={Images.Back}></Image>
          </TouchableOpacity>          
        </SafeAreaView>       
      ),
    }}>

      <Stack.Screen 
        name="add_button" 
        options={{ // This is the style section of what the specific screens container looks like.
          headerShown: true,
          headerTitle: "Add Member",
          headerTitleAlign: 'center',
          headerTintColor: '#61646B',  // grey // Set the color of the header title
          headerStyle: {
            backgroundColor: '#FFEFA4',  // yellow // Set background color of the header
          },
          headerTitleStyle: {
            fontSize: 22, 
            fontFamily: 'SemiBold', 
          },             
        }}/>
      
      <Stack.Screen 
        name="QR" 
        options={{ // This is the style section of what the specific screens container looks like.
          headerShown: true,
          headerTitle: "QR Code",
          headerTitleAlign: 'center',
          headerTintColor: '#61646B',  // grey // Set the color of the header title
          headerStyle: {
            backgroundColor: '#FFEFA4',  // yellow // Set background color of the header
          },
          headerTitleStyle: {
            fontSize: 22, 
            fontFamily: 'SemiBold', 
          },
      }}/>

    </Stack>


  )
}
export default addButton_layout

const style = StyleSheet.create({
  header: {
    justifyContent: 'center',
    height: 78,
    backgroundColor: '#FFEFA4'
  },
  header_Text: {
    textAlign: 'center', 
    fontFamily: 'SemiBold',
    fontSize: 20, 
    color: '#61646B',
    marginTop: 10
  },
  back_button: {
    alignSelf: 'flex-start',
    marginTop: -35,
    marginLeft: 18,
    transform: [{ scale: 0.9 }]
  },
});