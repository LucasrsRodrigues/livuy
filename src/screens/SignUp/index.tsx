import {
  Box,
  Button,
  Divider,
  HStack,
  Pressable,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "native-base";
import { GLOBAL } from "@themes/variables";

import GoogleIcon from "@assets/icons/google.svg";
import AppleIcon from "@assets/icons/apple.svg";

export default function SignUp() {
  const { toggleColorMode } = useColorMode();
  const background = useColorModeValue(GLOBAL.background, GLOBAL.grayscale_100);
  const color = useColorModeValue(GLOBAL.grayscale_100, GLOBAL.white);
  const borderColor = useColorModeValue(GLOBAL.line, GLOBAL.line_dark);
  const appleTintColor = useColorModeValue("#171725", "#ffffff");

  return (
    <Box bg={background} flex={1} p={6} safeArea>
      <VStack alignItems="center">
        <Text color={color} fontSize={24} fontWeight="bold">
          Create account
        </Text>
        <Text
          color={GLOBAL.grayscale_50}
          fontSize={16}
          fontWeight="medium"
          maxW={248}
          textAlign="center"
          lineHeight={24}
        >
          We happy to see tou again. Sign Up to your account
        </Text>
      </VStack>

      <VStack space={4} mt={8}>
        <Pressable
          borderWidth={1}
          borderColor={borderColor}
          rounded="full"
          p={3}
        >
          <HStack alignItems="center" justifyContent="center">
            <GoogleIcon />

            <Text fontWeight="medium" fontSize={14} color={color} ml={3}>
              Continue with Google
            </Text>
          </HStack>
        </Pressable>

        <Pressable
          borderWidth={1}
          borderColor={borderColor}
          rounded="full"
          p={3}
        >
          <HStack alignItems="center" justifyContent="center">
            <AppleIcon fill={appleTintColor} />

            <Text fontWeight="medium" fontSize={14} color={color} ml={3}>
              Continue with Apple
            </Text>
          </HStack>
        </Pressable>
      </VStack>

      <HStack justifyContent="center" alignItems="center" my={6}>
        <Box borderWidth={1} borderColor={borderColor} w={62} h={0} />

        <Text
          fontSize={14}
          fontWeight="medium"
          color={GLOBAL.grayscale_40}
          mx={3}
        >
          Or continue with
        </Text>

        <Box borderWidth={1} borderColor={borderColor} w={62} h={0} />
      </HStack>

      <Button onPress={toggleColorMode}>
        <Text>Trocar</Text>
      </Button>
    </Box>
  );
}
