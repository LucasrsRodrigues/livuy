import { GLOBAL } from "@themes/variables";
import {
  IconButton as NBIconButton,
  Pressable,
  useColorMode,
  useColorModeValue,
} from "native-base";

import MenuIcon from "@assets/icons/menu.svg";
import { SvgProps } from "react-native-svg";

interface IIconButtonProps {
  icon: React.FC<SvgProps>;
}

export function IconButton({ icon: Icon }: IIconButtonProps) {
  const fill = useColorModeValue(GLOBAL.grayscale_100, GLOBAL.white);
  const borderColor = useColorModeValue(GLOBAL.line, GLOBAL.line_dark);

  return (
    <Pressable
      w={10}
      h={10}
      borderWidth={1}
      borderColor={borderColor}
      rounded="full"
      alignItems="center"
      justifyContent="center"
    >
      <Icon fill={fill} />
    </Pressable>
  );
}
