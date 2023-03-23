import { GLOBAL } from "@themes/variables";
import {
  HStack,
  Text,
  Pressable,
  useColorMode,
  useColorModeValue,
} from "native-base";

import Calendar from "@assets/icons/calendar.svg";

interface IDrawnerButtonProps {
  currentTab: any;
  setCurrentTab: any;
  title: string;
  icon: any;
}

export function DrawnerButton({
  currentTab,
  setCurrentTab,
  icon: Icon,
  title,
}: IDrawnerButtonProps) {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue(GLOBAL.grayscale_100, GLOBAL.grayscale_10);
  const bgButton = useColorModeValue(GLOBAL.white, GLOBAL.grayscale_80);

  return (
    <Pressable
      py={2}
      bg={currentTab === title ? bgButton : "transparent"}
      pl={5}
      pr={10}
      rounded="lg"
      onPress={() => {
        if (title === "Dark Mode") {
          toggleColorMode();
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <HStack space={2}>
        <Icon fill={text} width={20} height={20} />

        <Text fontSize={14} fontWeight={600} color={text}>
          {title}
        </Text>
      </HStack>
    </Pressable>
  );
}
