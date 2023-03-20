import { GLOBAL } from "@themes/variables";
import { IconButton as NBIconButton, Pressable } from "native-base";

import MenuIcon from "@assets/icons/menu.svg";
import { SvgProps } from "react-native-svg";

interface IIconButtonProps {
  icon: React.FC<SvgProps>;
}

export function IconButton({ icon: Icon }: IIconButtonProps) {
  return (
    <Pressable
      w={10}
      h={10}
      borderWidth={1}
      borderColor={GLOBAL.line}
      rounded="full"
      alignItems="center"
      justifyContent="center"
    >
      <Icon fill={GLOBAL.grayscale_100} />
    </Pressable>
  );
}
