import { Box, Button, useColorMode } from "native-base";
import { GLOBAL } from "@themes/variables";

import { Header, LiveMatch, TodayMatch } from "./sections";

export default function Home() {
  return (
    <Box bg={GLOBAL.background} flex={1}>
      <Header />
      <LiveMatch />
      <TodayMatch />
    </Box>
  );
}
