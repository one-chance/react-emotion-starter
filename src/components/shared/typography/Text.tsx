import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, FontSizes, FontWeights, Sizes } from '@styles/index';

type TextProps = ComponentProps<'span'> & {
  font?: string;
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeights;
  background?: keyof typeof Colors;
  border?: keyof typeof Colors;
  color?: keyof typeof Colors;
  center?: boolean;
  flex?: boolean;
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  margin?: string;
  padding?: string;
};

export default function Text({
  font,
  size,
  weight,
  background,
  border,
  color,
  center,
  flex,
  width,
  minWidth,
  maxWidth,
  margin,
  padding,
  ...props
}: TextProps) {
  const css: CSSObject = {
    color: Colors[color as keyof typeof Colors] || Colors['text-color'],
    fontFamily: font || 'inherit',
    fontSize: FontSizes[size as keyof typeof FontSizes] || '1rem',
    fontWeight: FontWeights[weight as keyof typeof FontWeights] || 400,
    backgroundColor: Colors[background as keyof typeof Colors] || 'transparent',
    ...(border && {
      border: '1px solid',
      borderColor: Colors[border as keyof typeof Colors] || 'transparent',
    }),
    ...(center && { textAlign: 'center' }),
    ...(flex && { flex: 1 }),
    ...(width && { width: Sizes[width as keyof typeof Sizes] || width }),
    ...(minWidth && {
      minWidth: Sizes[minWidth as keyof typeof Sizes] || minWidth,
    }),
    ...(maxWidth && {
      maxWidth: Sizes[maxWidth as keyof typeof Sizes] || maxWidth,
    }),
    ...(margin && { margin: margin }),
    ...(padding && { padding: padding }),
  };

  return jsx('span', { css, ...props });
}
