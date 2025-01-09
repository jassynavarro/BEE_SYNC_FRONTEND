import { DrawerToggleButton } from '@react-navigation/drawer'
import { Stack } from 'expo-router'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { useRouter } from 'expo-router';;
import Images from '../../constants/images';

const addButton_layout = () => {
  const router = useRouter(); // Get the router object
  return (
    <Stack screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#FFEFA4',  // Set background color of the header
        
      },
      // headerTitleStyle: { INAAYOS KO PA TO
      //   fontSize: 22, 
      //   fontFamily: 'SemiBold', 
      // },
      // headerContainerStyle: {
      //   height: 100, // Adjust the header container height here
      // },
      headerLeft: () => ( // This is for the back button to appear on the left
        <TouchableOpacity style={style.back_button} onPress={()=>router.push('/')}>
          <Image source={Images.Back}></Image>
        </TouchableOpacity>
      )
      
    }}>

      <Stack.Screen 
        name="add_button" 
        options={{ // This is the style section of what the specific screens container looks like.
          headerShown: true,
          headerTitle: "Add Button",
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
  back_button: {
    alignSelf: 'flex-start',
    marginTop: 22,
    marginLeft: 18,
    transform: [{ scale: 0.9 }]
  },
});