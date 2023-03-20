import { Box } from "native-base";
import { GLOBAL } from "@themes/variables";

import { Header } from "./sections/Header";

export default function Home() {
  return (
    <Box bg={GLOBAL.background} flex={1}>
      <Header />
    </Box>
  );
}
