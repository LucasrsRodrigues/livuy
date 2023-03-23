import {
  Box,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from "native-base";
import { GLOBAL } from "@themes/variables";

import { Header, LiveMatch, TodayMatch } from "./sections";
import { useDrawner } from "@hooks/Drawner.hook";

export default function Home() {
  const background = useColorModeValue(GLOBAL.background, GLOBAL.grayscale_100);

  return (
    <Box bg={background} flex={1}>
      <Header />
      <LiveMatch />
      <TodayMatch />
    </Box>
  );
}
