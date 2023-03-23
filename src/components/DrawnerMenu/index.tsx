import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Pressable,
  useColorMode,
  useColorModeValue,
} from "native-base";
import Animated from "react-native-reanimated";
import { GLOBAL } from "@themes/variables";

import ArrowRight from "@assets/icons/arrow-right.svg";
import Calendar from "@assets/icons/calendar.svg";
import DocumentText from "@assets/icons/document-text.svg";
import Video from "@assets/icons/video.svg";
import Notification from "@assets/icons/notification.svg";
import Eraser from "@assets/icons/eraser.svg";
import Star from "@assets/icons/star.svg";
import Moon from "@assets/icons/moon.svg";
import InfoCircle from "@assets/icons/info-circle.svg";
import ShieldSecurity from "@assets/icons/shield-security.svg";
import NotificationStatus from "@assets/icons/notification-status.svg";
import Messages from "@assets/icons/messages.svg";

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

const menuOptionsOne = [
  {
    id: "0",
    icon: Calendar,
    label: "Schedule",
  },
  {
    id: "1",
    icon: DocumentText,
    label: "News",
  },
  {
    id: "2",
    icon: Video,
    label: "Video",
  },
];

const menuOptionsTwo = [
  {
    id: "0",
    icon: Eraser,
    label: "Clear Cahce",
  },
  {
    id: "1",
    icon: Notification,
    label: "Notification",
  },
  {
    id: "3",
    icon: Star,
    label: "Favourites",
  },
  {
    id: "4",
    icon: Moon,
    label: "Dark Mode",
  },
];

const menuOptionsThree = [
  {
    id: "0",
    icon: InfoCircle,
    label: "Help",
  },
  {
    id: "1",
    icon: ShieldSecurity,
    label: "Privacy & Policies",
  },
  {
    id: "3",
    icon: NotificationStatus,
    label: "News Publiser",
  },
  {
    id: "4",
    icon: Messages,
    label: "Contact Us",
  },
];

export function DrawnerMenu({
  currentTab,
  setCurrentTab,
  animatedContainerStyle,
  children,
}: IDrawnerMenuProps) {
  const bg = useColorModeValue(GLOBAL.grayscale_10, GLOBAL.grayscale_90);
  const text = useColorModeValue(GLOBAL.grayscale_100, GLOBAL.grayscale_10);

  return (
    <Box flex={1} safeArea bg={bg}>
      <Box alignItems="flex-start">
        <VStack padding={5} space={2}>
          <Text fontSize={18} fontWeight={600} color={text}>
            Score Board
          </Text>

          {menuOptionsOne.map((item) => (
            <DrawnerButton
              key={item.id}
              currentTab={currentTab}
              icon={item.icon}
              setCurrentTab={setCurrentTab}
              title={item.label}
            />
          ))}
        </VStack>

        <VStack padding={5} space={2}>
          <Text fontSize={12} fontWeight={500} color={GLOBAL.grayscale_50}>
            Settings
          </Text>

          {menuOptionsTwo.map((item) => (
            <DrawnerButton
              key={item.id}
              currentTab={currentTab}
              icon={item.icon}
              setCurrentTab={setCurrentTab}
              title={item.label}
            />
          ))}
        </VStack>

        <VStack padding={5} space={2}>
          <Text fontSize={12} fontWeight={500} color={GLOBAL.grayscale_50}>
            Info
          </Text>

          {menuOptionsThree.map((item) => (
            <DrawnerButton
              key={item.id}
              currentTab={currentTab}
              icon={item.icon}
              setCurrentTab={setCurrentTab}
              title={item.label}
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
            <Text fontSize={14} fontWeight="semibold" color={text}>
              Jaylon Rosser
            </Text>
            <Text fontSize={14} fontWeight="regular" color={GLOBAL.primary}>
              Footbalovers
            </Text>
          </VStack>

          <Pressable p={2}>
            <ArrowRight fill={text} width={24} height={24} />
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
