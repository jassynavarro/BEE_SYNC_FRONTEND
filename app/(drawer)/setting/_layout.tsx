import {SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// THIS IS THE MAIN LAYOUT OF THE INDEX.

const settings_layout = () => {

  return (
    <Stack>
      <Stack.Screen name="settings" options={{headerShown: false}}/>
    </Stack>
  )
}
export default settings_layout