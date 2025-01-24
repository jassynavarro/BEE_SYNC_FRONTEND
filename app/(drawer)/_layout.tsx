import { Pressable, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Drawer } from "expo-router/drawer";
import Images from '../../constants/images';
import { DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';

const drawer_layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerActiveBackgroundColor: '#FFDB36', 
        
        drawerStyle: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          backgroundColor: '#FFFCF0',
          width: 250
        },
        drawerLabelStyle: {
          color: '#616060',
          fontFamily: 'Medium',
          fontSize: 16
        },
        drawerItemStyle: {
          padding: 15,
          borderRadius: 0,
          borderBottomWidth: 1, // Add a line separator
          borderBottomColor: '#EFEFEF', // Light grey color for the separator
        }
      }}
      drawerContent = { (props) => {
        return (
          <SafeAreaView>

            <SafeAreaView style={[style.container]}>
              <Image
                style={[style.profile]}
                source={Images.Profile7}
                resizeMode='contain'
              />
              <Text style={[style.name]}>Mikasa</Text>
              <Text style={[style.email]}>mikasaackerman@gmail.com</Text>
            </SafeAreaView>
            <DrawerItemList {...props}/>

          </SafeAreaView>
        )
      }}
    >   
      <Drawer.Screen 
        name="(screens)"     
        options={{
          drawerLabel: "Home",
          drawerIcon: () => (
            <Image
              source={Images.Home} // Replace with your image path
              style={[style.icon]}
            />
          ),
        }} 
      />
      <Drawer.Screen 
        name="main_menu"     
        options={{
          drawerLabel: "Main Menu",
          drawerIcon: () => (
            <Image
              source={Images.Main_Menu} // Replace with your image path
              style={[style.icon]}
            />
          ),
        }} 
      />          
      <Drawer.Screen 
        name="log_out"     
        options={{
          drawerLabel: "Log Out",
          drawerIcon: () => (
            <Image
              source={Images.Out} // Replace with your image path
              style={[style.icon]}
            />
          ),
        }} 
      />          
    </Drawer>

  )
}
export default drawer_layout

const style = StyleSheet.create({
  icon: {
    width: 24, // Icon width
    height: 24, // Icon height
    resizeMode: 'contain', // Maintain aspect ratio
  },
  container: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEFA4',
    paddingBottom: 12
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 25, // To make it circular
    position: 'absolute', // Absolute positioning for the image
    top: 25, // Adjust to position the profile image at the top
    left: 25
  },
  name: {
    fontFamily: 'Medium',
    fontSize: 22,
    color: '#404040',
    position: 'absolute', // Position the name below the image
    top: 25, // Adjust this to position the name below the image without overlapping
    bottom: 45, // Adjust this value based on your preference
  },
  email: {
    fontFamily: 'Medium',
    fontSize: 10,
    color: '#404040',
    position: 'absolute', // Position the name below the image
    top: 55, // Adjust this to position the name below the image without overlapping
    right: 20, // Adjust this value based on your preference
  },
})