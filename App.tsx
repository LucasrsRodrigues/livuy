import React from "react";
import { Box, NativeBaseProvider, Spinner, Text } from "native-base";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

import Home from "./src/screens/Home";
import { BASETHEME } from "@themes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  return (
    <NativeBaseProvider theme={BASETHEME}>
      {!fontsLoaded ? (
        <Box flex={1} alignItems="center" justifyContent="center">
          <Spinner size="lg" color="#FF2882" />
        </Box>
      ) : (
        <Home />
      )}
    </NativeBaseProvider>
  );
}
