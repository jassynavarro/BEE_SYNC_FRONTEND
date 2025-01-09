import {SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// THIS IS THE MAIN LAYOUT OF THE INDEX.

const mainMenu_layout = () => {

  return (
    <Stack>
      <Stack.Screen name="main_menu" options={{headerShown: false}}/>
    </Stack>
  )
}
export default mainMenu_layout