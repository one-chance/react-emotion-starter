import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, FontSizes, FontWeights, Sizes } from '@styles/index';

type LabelProps = ComponentProps<'label'> & {
  font?: string;
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeights;
  color?: keyof typeof Colors;
  background?: keyof typeof Colors;
  border?: keyof typeof Colors;
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  margin?: string;
  padding?: string;
};

export default function Label({
  font,
  size,
  weight,
  color,
  background,
  border,
  width,
  minWidth,
  maxWidth,
  margin,
  padding,
  ...props
}: LabelProps) {
  const css: CSSObject = {
    fontFamily: font || 'inherit',
    fontSize: FontSizes[size as keyof typeof FontSizes] || '1rem',
    fontWeight: FontWeights[weight as keyof typeof FontWeights] || 400,
    color: Colors[color as keyof typeof Colors] || 'black',
    backgroundColor: Colors[background as keyof typeof Colors] || 'transparent',
    ...(border && {
      border: '1px solid',
      borderColor: Colors[border as keyof typeof Colors] || 'transparent',
    }),
    ...(width && { width: Sizes[width as keyof typeof Sizes] || width }),
    ...(minWidth && {
      minWidth: Sizes[minWidth as keyof typeof Sizes] || minWidth,
    }),
    ...(maxWidth && {
      maxWidth: Sizes[maxWidth as keyof typeof Sizes] || maxWidth,
    }),
    ...(margin && { margin }),
    ...(padding && { padding }),
  };
  return jsx('label', { css, ...props });
}
