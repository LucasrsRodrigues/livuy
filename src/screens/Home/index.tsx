import { Box, Button, useColorMode, useColorModeValue } from "native-base";
import { GLOBAL } from "@themes/variables";

import { Header, LiveMatch, TodayMatch } from "./sections";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const background = useColorModeValue(GLOBAL.background, GLOBAL.grayscale_100);

  return (
    <Box bg={background} flex={1}>
      <Header />
      <LiveMatch />
      <TodayMatch />

      <Button onPress={toggleColorMode}>Toggle</Button>
    </Box>
  );
}
