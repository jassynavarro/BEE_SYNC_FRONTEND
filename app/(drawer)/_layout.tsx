import { StyleSheet, Text, View, Image } from 'react-native';
import { Drawer } from "expo-router/drawer";
import { DrawerItemList } from '@react-navigation/drawer';
import Images from '../../constants/images';

// THIS IS THE LAYOUT OF THE (DRAWER)

const drawer_layout = () => {

  return (
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveBackgroundColor: 'transparent',
          drawerActiveTintColor: '#FFDB36',
          drawerInactiveTintColor: '#616060',
          drawerStyle: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: '#FFFCF0',
            width: 250,
          },
          drawerLabelStyle: {
            fontFamily: 'Medium',
            fontSize: 17,
          },
          drawerItemStyle: {
            padding: 15,
            borderRadius: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#EFEFEF',
          },
        }}
        drawerContent={(props) => {
          return (
            <View style={{ paddingTop: 20 }}>
              <View style={[style.container]}>
                <Image
                  style={[style.profile]}
                  source={Images.Profile7}
                  resizeMode='contain'
                />
                <Text style={[style.name]}>Mikasa</Text>
                <Text style={[style.email]}>mikasaackerman@gmail.com</Text>
              </View>
              <DrawerItemList {...props} />
            </View>
          );
        }}
      >
        <Drawer.Screen
          name="(screens)"
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ focused }) => (
              <Image
                source={Images.Home}
                style={[style.icon, { tintColor: focused ? '#FFDB36' : '#616060' }]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="main_menu/mainMenu"
          options={{
            drawerLabel: "Main Menu",
            drawerIcon: ({ focused }) => (
              <Image
                source={Images.Main_Menu}
                style={[style.icon, { tintColor: focused ? '#FFDB36' : '#616060' }]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="log_out/logOut"
          options={{
            drawerLabel: "Log Out",
            drawerIcon: ({ focused }) => (
              <Image
                source={Images.Out}
                style={[style.icon, { tintColor: focused ? '#FFDB36' : '#616060' }]}
              />
            )
          }}
        />

      </Drawer>
  );
};

export default drawer_layout;

const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  container: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEFA4',
    paddingBottom: 12,
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 25, // To make it circular
    position: 'absolute', // Absolute positioning for the image
    top: 25,
    left: 25,
  },
  name: {
    fontFamily: 'Medium',
    fontSize: 22,
    color: '#404040',
    position: 'absolute',
    top: 25,
    bottom: 45,
  },
  email: {
    fontFamily: 'Medium',
    fontSize: 10,
    color: '#404040',
    position: 'absolute',
    top: 55,
    right: 20,
  },
});
