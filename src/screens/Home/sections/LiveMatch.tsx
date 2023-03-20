import { GLOBAL, VARIABLES } from "@themes/variables";
import { HStack, Heading, VStack, useColorModeValue } from "native-base";
import { MatchCard } from "../components/MatchCard";

export function LiveMatch() {
  const color = useColorModeValue(GLOBAL.grayscale_100, GLOBAL.white);

  return (
    <VStack px={VARIABLES.paddingHorizontal} py={4} space={4}>
      <Heading fontWeight="semibold" color={color} fontSize={18}>
        Live Match
      </Heading>

      <MatchCard />
    </VStack>
  );
}
