import {SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// THIS IS THE MAIN LAYOUT OF THE INDEX.

const logOut_layout = () => {

  return (
    <Stack>
      <Stack.Screen name="logOut" options={{headerShown: false}}/>
    </Stack>
  )
}
export default logOut_layout