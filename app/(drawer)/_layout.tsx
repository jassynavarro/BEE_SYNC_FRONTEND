import { StyleSheet, Text, View } from 'react-native'
import { Drawer } from "expo-router/drawer";

const drawer_layout = () => {
  return (
    <Drawer screenOptions={{
      headerShown: false,
      drawerPosition: 'right'
    }}>    
      <Drawer.Screen 
        name="(screens)"     
        options={{
          drawerLabel: "Home"
        }} 
      />
      <Drawer.Screen 
        name="main_menu"     
        options={{
          drawerLabel: "Main Menu"
        }} 
      />    
      <Drawer.Screen 
        name="setting"     
        options={{
          drawerLabel: "Settings"
        }} 
      />       
      <Drawer.Screen 
        name="log_out"     
        options={{
          drawerLabel: "Log Out"
        }} 
      />    
    </Drawer>

  )
}
export default drawer_layout
const styles = StyleSheet.create({})