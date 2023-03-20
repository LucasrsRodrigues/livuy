import { GLOBAL, VARIABLES } from "@themes/variables";
import { HStack, Heading, VStack } from "native-base";
import { MatchCard } from "../components/MatchCard";

export function LiveMatch() {
  return (
    <VStack px={VARIABLES.paddingHorizontal} py={4} space={4}>
      <Heading fontWeight="semibold" color={GLOBAL.grayscale_100} fontSize={18}>
        Live Match
      </Heading>

      <MatchCard />
    </VStack>
  );
}
