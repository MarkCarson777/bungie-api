import { ReactElement } from "react";

import Hunter from "../../assets/icons/hunter.svg?react";
import Titan from "../../assets/icons/titan.svg?react";
import Warlock from "../../assets/icons/warlock.svg?react";

export interface IconProps {
  icon: string;
  color?: string;
  size?: number;
  [key: string]: any;
}

interface IconComponents {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const icons: IconComponents = {
  Hunter,
  Titan,
  Warlock,
};

export function Icon({ icon, color, size, ...rest }: IconProps): ReactElement {
  const Component = icons[icon];

  return <Component {...rest} fill={color} width={size} height={size} />;
}
