import { GLOBAL } from "@themes/variables";
import { Box, Center, HStack, Image, Text, VStack } from "native-base";

import TeamOne from "@assets/showcase/Badges 01.svg";
import TeamTwo from "@assets/showcase/image 9.svg";
import Union from "@assets/Union.svg";

export function MatchCard() {
  return (
    <VStack
      bg={GLOBAL.secondary}
      px={4}
      py={3}
      borderRadius={16}
      overflow="hidden"
    >
      <Box
        position="absolute"
        alignSelf="flex-end"
        alignContent="end"
        width="100%"
      >
        <Union
          style={{
            alignSelf: "flex-end",
          }}
        />
      </Box>

      <Center>
        <Text fontSize={14} fontWeight={500} color={GLOBAL.white}>
          Stamford Bridge
        </Text>
        <Text fontSize={14} fontWeight={400} color={GLOBAL.grayscale_40}>
          Week 10
        </Text>
      </Center>

      <HStack alignItems="center" justifyContent="space-between" px={4} py={3}>
        <VStack>
          <TeamOne />

          <Box alignItems="center" mt={2}>
            <Text color={GLOBAL.white} fontWeight={500} fontSize={14}>
              Chelsea
            </Text>
            <Text color={GLOBAL.grayscale_40} fontWeight={500} fontSize={14}>
              Home
            </Text>
          </Box>
        </VStack>
        <VStack alignItems="center">
          <Text color={GLOBAL.white} fontWeight={600} fontSize={32}>
            1 : 1
          </Text>
          <Box
            bg={`${GLOBAL.alert_success}24`}
            borderWidth={1}
            borderColor={GLOBAL.alert_success}
            px={2}
            py={1}
            rounded="full"
            mt={2}
          >
            <Text color={GLOBAL.alert_success} fontWeight={500} fontSize={12}>
              90+4
            </Text>
          </Box>
        </VStack>
        <VStack>
          <TeamTwo />
          <Box alignItems="center" mt={2}>
            <Text color={GLOBAL.white} fontWeight={500} fontSize={14}>
              Man Utd
            </Text>
            <Text color={GLOBAL.grayscale_40} fontWeight={500} fontSize={14}>
              Away
            </Text>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
}
