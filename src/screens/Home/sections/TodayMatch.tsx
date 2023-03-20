import { GLOBAL, VARIABLES } from "@themes/variables";
import { Box, HStack, Heading, Text, VStack } from "native-base";
import PremierLeagueLogo from "@assets/premier-league-1 1.svg";
import ArrowRight from "@assets/icons/arrow-right.svg";

import ShieldForest from "@assets/showcase/image 27.svg";
import ShieldLiverpool from "@assets/showcase/Badges 07.svg";
import { MatchCardLine } from "@components/MatchCardLine";

export function TodayMatch() {
  return (
    <VStack px={VARIABLES.paddingHorizontal} space={4}>
      <HStack alignItems="center">
        <PremierLeagueLogo fill={GLOBAL.grayscale_100} width={24} height={24} />

        <Heading
          fontWeight="semibold"
          color={GLOBAL.grayscale_100}
          fontSize={18}
          ml={2}
        >
          Today Match
        </Heading>

        <Box flex={1} alignItems="flex-end">
          <ArrowRight fill={GLOBAL.grayscale_100} />
        </Box>
      </HStack>

      <VStack space={3}>
        <MatchCardLine />
        <MatchCardLine />
        <MatchCardLine />
        <MatchCardLine />
        <MatchCardLine />
      </VStack>
    </VStack>
  );
}
