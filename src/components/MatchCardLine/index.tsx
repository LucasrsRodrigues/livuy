import { GLOBAL } from "@themes/variables";
import { Box, HStack, Text } from "native-base";

import ShieldForest from "@assets/showcase/image 27.svg";
import ShieldLiverpool from "@assets/showcase/Badges 07.svg";

export function MatchCardLine() {
  return (
    <HStack
      bg="#ffffff"
      borderRadius={12}
      px={3}
      py={4}
      justifyContent="center"
      space={3}
    >
      <HStack alignItems="center">
        <Text fontSize={14} fontWeight={500} color={GLOBAL.grayscale_100}>
          N Forest
        </Text>
        <ShieldForest width={32} height={32} />
      </HStack>

      <Box
        bg={`${GLOBAL.alert_success}10`}
        px={2}
        py={1}
        rounded="full"
        justifyContent="center"
      >
        <Text fontSize={12} fontWeight={500} color={GLOBAL.alert_success}>
          06:30
        </Text>
      </Box>

      <HStack alignItems="center">
        <ShieldLiverpool width={32} height={32} />

        <Text fontSize={14} fontWeight={500} color={GLOBAL.grayscale_100}>
          Liverpool
        </Text>
      </HStack>
    </HStack>
  );
}
