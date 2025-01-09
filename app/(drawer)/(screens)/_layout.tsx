import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Tabs } from 'expo-router';
import Images from '../../../constants/images';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';;

// THIS IS THE BOTTOM TAB (SCREENS LAYOUT).
//we have separate layout.tsx because this part is for with navigation bottom tabs only.

const screensLayout = () => {
  const router = useRouter(); // Get the router object
  return (
    <Tabs 
      screenOptions={{ // This is the style section of what the Bottom Tab Container looks like.
        headerRight: () => ( // This is for the menu button to appear on the right
          <SafeAreaView style={style.menuButton}>
            <DrawerToggleButton tintColor='#61646B'/>
          </SafeAreaView>
        ), 
        headerLeft: () => ( // This is for the back button to appear on the left
          <TouchableOpacity style={style.back_button} onPress={()=>router.push('/')}>
            <Image source={Images.Back}></Image>
          </TouchableOpacity>
        ),
        tabBarStyle: {
          height: 85,  
          paddingTop: 24, // used this so the tabs content will be on the middle
          backgroundColor: '#FFFCF0', // yellow-white
          borderTopColor: '#000000', // black
          borderTopWidth: 1,
          shadowOpacity: 0
        },
    }}>

      <Tabs.Screen 
        name="calendar"
        options={{ // This is the style section of what the specific screens container looks like.
          headerShown: true,
          headerTitle: "Calendar",
          headerTitleAlign: 'center',
          headerTintColor: '#61646B',  // grey // Set the color of the header title
          headerStyle: {
            backgroundColor: '#FFEFA4',  // yellow // Set background color of the header
            height: 78,
          },
          headerTitleStyle: {
            fontSize: 22, 
            fontFamily: 'SemiBold', 
            textAlign: 'center', 
            marginTop: 25
          },         
          tabBarLabel: () => null,  // Hides the label or title of the bottom tab.
          tabBarIcon: ({ focused }) => (
            <Image  
              source={Images.Calendar}
              style={{ tintColor: focused ? '#FFDB36' : '#61646B' }} //colors when clicked (yellow) and colors when not (grey). 
              resizeMode='contain' // to maintain the default size of the image. 
            />
          ),
        }}
      />

      <Tabs.Screen 
        name="task"
        options={{
          headerShown: true,
          headerTitle: "All Task",
          headerTitleAlign: 'center',
          headerTintColor: '#61646B',  // grey // Set the color of the header title
          headerStyle: {
            backgroundColor: '#FFEFA4',  // yellow // Set background color of the header
            height: 78,
          },
          headerTitleStyle: {
            fontSize: 22, 
            fontFamily: 'SemiBold', 
            textAlign: 'center', 
            marginTop: 25
          }, 
          tabBarLabel: () => null,                              
          tabBarIcon: ({ focused }) => (
            <Image
              source={Images.Task_List}
              style={{ tintColor: focused ? '#FFDB36' : '#61646B' }} 
              resizeMode='contain' 
            />
          ),
        }}
      />

      <Tabs.Screen 
        name="progress"
        options={{
          headerShown: true,
          headerTitle: "Hive Progress",
          headerTitleAlign: 'center',
          headerTintColor: '#61646B',  // grey // Set the color of the header title
          headerStyle: {
            backgroundColor: '#FFEFA4',  // yellow // Set background color of the header
            height: 78,
          },
          headerTitleStyle: {
            fontSize: 22, 
            fontFamily: 'SemiBold', 
            textAlign: 'center', 
            marginTop: 25
          }, 
          tabBarLabel: () => null, 
          tabBarIcon: ({ focused }) => (
            <Image
              source={Images.Hive}
              style={{ tintColor: focused ? '#FFDB36' : '#61646B' }}
              resizeMode='contain'
            />
          ),
        }}
      />         

      <Tabs.Screen 
        name="notif"
        options={{
          headerShown: true,
          headerTitle: "Notification",
          headerTitleAlign: 'center',
          headerTintColor: '#61646B',  // grey // Set the color of the header title
          headerStyle: {
            backgroundColor: '#FFEFA4',  // yellow // Set background color of the header
            height: 78,
          },
          headerTitleStyle: {
            fontSize: 22, 
            fontFamily: 'SemiBold', 
            textAlign: 'center', 
            marginTop: 25
          },          
          tabBarLabel: () => null, 
          tabBarIcon: ({ focused }) => (
            <Image
              source={Images.Notification}
              style={{ tintColor: focused ? '#FFDB36' : '#61646B' }}
              resizeMode='contain' 
            />
          ),
        }}
      />

      <Tabs.Screen 
        name="profile"
        options={{
          headerShown: true,
          headerTitle: "Profile",
          headerTitleAlign: 'center',
          headerTintColor: '#61646B',  // grey // Set the color of the header title
          headerStyle: {
            backgroundColor: '#FFEFA4',  // yellow // Set background color of the header
            height: 78,
          },
          headerTitleStyle: {
            fontSize: 22, 
            fontFamily: 'SemiBold', 
            textAlign: 'center', 
            marginTop: 25
          },          
          tabBarLabel: () => null, 
          tabBarIcon: ({ focused }) => (
            <Image
              source={Images.Profile}
              style={{ tintColor: focused ? '#FFDB36' : '#61646B' }}
              resizeMode='contain' 
            />
          ),
        }}
      />        
    </Tabs>
  )
}
export default screensLayout

const style = StyleSheet.create({
  menuButton: {
    marginRight: 6, 
    padding: 5, 
    transform: [{ scale: 1.5 }]
  },
  back_button: {
    alignSelf: 'flex-start',
    marginTop: 22,
    marginLeft: 18,
    transform: [{ scale: 0.9 }]
  },
});