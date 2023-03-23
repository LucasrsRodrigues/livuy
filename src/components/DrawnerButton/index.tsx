import { GLOBAL } from "@themes/variables";
import { HStack, Text, Pressable } from "native-base";

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
  return (
    <Pressable
      py={2}
      bg={currentTab === title ? GLOBAL.white : "transparent"}
      pl={5}
      pr={10}
      rounded="lg"
      onPress={() => setCurrentTab(title)}
    >
      <HStack space={2}>
        <Icon fill={GLOBAL.grayscale_100} width={20} height={20} />

        <Text fontSize={14} fontWeight={600} color={GLOBAL.grayscale_100}>
          {title}
        </Text>
      </HStack>
    </Pressable>
  );
}
