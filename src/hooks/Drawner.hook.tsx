import { DrawnerMenu } from "@components/DrawnerMenu";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface IDrawnerContextData {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  openMenu: () => void;
  animatedContainerStyle: any;
}

const DrawnerContext = createContext({} as IDrawnerContextData);

interface IDrawnerProviderProps {
  children: ReactNode;
}

function DrawnerProvider({ children }: IDrawnerProviderProps) {
  const [currentTab, setCurrentTab] = useState("Schedule");

  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useSharedValue(0);
  const scaleValue = useSharedValue(1);
  const closeButtonOffset = useSharedValue(0);

  function openMenu() {
    scaleValue.value = withTiming(showMenu ? 1 : 0.88, {
      duration: 300,
    });

    offsetValue.value = withTiming(showMenu ? 0 : 230, {
      duration: 300,
    });

    setShowMenu(!showMenu);
  }

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scaleValue.value,
        },
        {
          translateX: offsetValue.value,
        },
      ],
    };
  });

  return (
    <DrawnerContext.Provider
      value={{ currentTab, setCurrentTab, openMenu, animatedContainerStyle }}
    >
      <DrawnerMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        animatedContainerStyle={animatedContainerStyle}
      >
        {children}
      </DrawnerMenu>
    </DrawnerContext.Provider>
  );
}

function useDrawner(): IDrawnerContextData {
  const context = useContext(DrawnerContext);

  if (!context) {
    throw new Error("useDrawner must be used within an DrawnerProvider");
  }

  return context;
}

export { useDrawner, DrawnerProvider };
