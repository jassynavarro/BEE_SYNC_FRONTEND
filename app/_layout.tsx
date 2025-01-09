import "./global.css";
import {SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// THIS IS THE MAIN LAYOUT OF THE INDEX.

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Bold": require('../assets/fonts/WorkSans-Bold.ttf'),
    "SemiBold": require('../assets/fonts/WorkSans-SemiBold.ttf'),
    "Medium": require('../assets/fonts/WorkSans-Medium.ttf')
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="(add)" options={{headerShown: false}}/>
      <Stack.Screen name="(screens)" options={{headerShown: false}}/>
      <Stack.Screen name="(drawer)" options={{headerShown: false}}/>
    </Stack>
  )
}
export default RootLayout


//can use the Slot to navigate the home page and won't be needing the style sheet anymore.
//Renders the currently selected content.
//One way to navigate.
//For stack another way to navigate
//but this can navigate multiple screens