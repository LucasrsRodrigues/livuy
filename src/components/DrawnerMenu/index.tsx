import { Box, HStack, Image, Text, VStack, Pressable } from "native-base";
import Animated from "react-native-reanimated";
import { GLOBAL } from "@themes/variables";

import ArrowRight from "@assets/icons/arrow-right.svg";
import Calendar from "@assets/icons/calendar.svg";
import { DrawnerButton } from "@components/DrawnerButton";
import { useDrawner } from "@hooks/Drawner.hook";
import { Dispatch, ReactNode, SetStateAction } from "react";

const BoxAnimated = Animated.createAnimatedComponent(Box);

interface IDrawnerMenuProps {
  children: ReactNode;
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  animatedContainerStyle: any;
}

export function DrawnerMenu({
  currentTab,
  setCurrentTab,
  animatedContainerStyle,
  children,
}: IDrawnerMenuProps) {
  return (
    <Box flex={1} safeArea bg={GLOBAL.primary}>
      <Box alignItems="flex-start">
        <VStack padding={5} space={2}>
          {Array(1, 2, 3, 4).map((item) => (
            <DrawnerButton
              key={item}
              currentTab={currentTab}
              icon={Calendar}
              setCurrentTab={setCurrentTab}
              title="Schedule"
            />
          ))}
        </VStack>

        <HStack padding={5} alignItems="center" maxW={300}>
          <Image
            source={{ uri: "https://github.com/LucasrsRodrigues.png" }}
            width={60}
            height={60}
            rounded="full"
            alt="foto_profile"
          />

          <VStack ml={3}>
            <Text
              fontSize={14}
              fontWeight="semibold"
              color={GLOBAL.grayscale_100}
            >
              Jaylon Rosser
            </Text>
            <Text fontSize={14} fontWeight="regular" color={GLOBAL.white}>
              Footbalovers
            </Text>
          </VStack>

          <Pressable p={2}>
            <ArrowRight fill={GLOBAL.grayscale_100} width={24} height={24} />
          </Pressable>
        </HStack>
      </Box>

      <BoxAnimated
        flexGrow={1}
        background="white"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        rounded="3xl"
        overflow="hidden"
        style={animatedContainerStyle}
      >
        {children}
      </BoxAnimated>
    </Box>
  );
}
