import { CSSObject } from '@emotion/react';

import * as Icons from '@assets/index';
import { Colors } from '@styles/index';

export type IconProps = {
  name: string;
  size: number;
  color: keyof typeof Colors;
  border?: keyof typeof Colors;
  radius?: number;
};

export default function Icon({ name, size, color, border, radius }: IconProps) {
  const SVGIcon = () => Icons[name as keyof typeof Icons];

  const css: CSSObject = {
    display: `inline-block`,
    width: size,
    height: size,
    color: Colors[color as keyof typeof Colors] || 'black',
    ...(border && {
      border: '1px solid',
      borderColor: Colors[border as keyof typeof Colors] || 'black',
    }),
    ...(radius && { borderRadius: `${radius}px` }),
  };

  return (
    <span css={css}>
      <SVGIcon />
    </span>
  );
}
