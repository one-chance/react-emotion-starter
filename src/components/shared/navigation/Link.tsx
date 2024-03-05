import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, FontSizes, FontWeights, Sizes } from '@styles/index';

type LinkProps = ComponentProps<'a'> & {
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeights;
  background?: keyof typeof Colors;
  border?: keyof typeof Colors;
  color?: keyof typeof Colors;
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  underline?: boolean;
  center?: boolean;
  radius?: number;
  margin?: string;
  padding?: string;
};

export default function Link({
  size,
  weight,
  background,
  border,
  color,
  width,
  minWidth,
  maxWidth,
  underline,
  center,
  radius,
  margin,
  padding,
  ...props
}: LinkProps) {
  const css: CSSObject = {
    backgroundColor: Colors[background as keyof typeof Colors] || 'transparent',
    color: Colors[color as keyof typeof Colors] || 'black',
    fontSize: FontSizes[size as keyof typeof FontSizes] || '1rem',
    fontWeight: FontWeights[weight as keyof typeof FontWeights] || 400,
    textDecoration: underline ? 'underline' : 'none',
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
    ...(center && { textAlign: 'center' }),
    ...(radius && { borderRadius: `${radius}px` }),
    ...(margin && { margin }),
    ...(padding && { padding }),
  };

  return jsx('a', {
    css,
    target: '_blank',
    rel: 'noopener noreferrer',
    ...props,
  });
}
