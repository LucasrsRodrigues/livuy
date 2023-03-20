import { HStack, StatusBar, Text, VStack } from "native-base";
import { GLOBAL, VARIABLES } from "@themes/variables";

import MenuIcon from "@assets/icons/menu.svg";
import NotificationIcon from "@assets/icons/notification.svg";
import SearchNormalIcon from "@assets/icons/search-normal.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconButton } from "@components/IconButton";
import { WeekSlider } from "../components/WeekSlider";

export function Header() {
  const { top } = useSafeAreaInsets();

  return (
    <VStack bg="#ffffff" pt={top}>
      <StatusBar barStyle="dark-content" />
      <HStack
        paddingX={VARIABLES.paddingHorizontal}
        alignItems="center"
        space={4}
      >
        <HStack alignItems="center" flex={1} space={4}>
          <IconButton icon={MenuIcon} />
          <Text fontSize={18} fontWeight={600} color={GLOBAL.grayscale_100}>
            Score Board
          </Text>
        </HStack>

        <IconButton icon={NotificationIcon} />
        <IconButton icon={SearchNormalIcon} />
      </HStack>

      <WeekSlider />
    </VStack>
  );
}
