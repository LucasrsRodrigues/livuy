import { GLOBAL, VARIABLES } from "@themes/variables";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "native-base";
import PremierLeagueLogo from "@assets/premier-league-1 1.svg";
import ArrowRight from "@assets/icons/arrow-right.svg";

import { MatchCardLine } from "@components/MatchCardLine";

export function TodayMatch() {
  const color_fill = useColorModeValue(GLOBAL.grayscale_100, GLOBAL.white);

  return (
    <VStack px={VARIABLES.paddingHorizontal} space={4}>
      <HStack alignItems="center">
        <PremierLeagueLogo fill={color_fill} width={24} height={24} />

        <Heading fontWeight="semibold" color={color_fill} fontSize={18} ml={2}>
          Today Match
        </Heading>

        <Box flex={1} alignItems="flex-end">
          <ArrowRight fill={color_fill} />
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
