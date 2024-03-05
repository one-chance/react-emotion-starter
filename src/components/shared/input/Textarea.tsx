import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, FontSizes, FontWeights, Sizes } from '@styles/index';

type TextareaProps = ComponentProps<'textarea'> & {
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeights;
  background?: keyof typeof Colors;
  border?: keyof typeof Colors;
  color?: keyof typeof Colors;
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  height?: keyof typeof Sizes | number;
  minHeight?: keyof typeof Sizes | number;
  maxHeight?: keyof typeof Sizes | number;
  radius?: number;
  margin?: string;
  padding?: string;
};

export default function Textarea({
  size,
  weight,
  background,
  border,
  color,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  radius,
  margin,
  padding,
  ...props
}: TextareaProps) {
  const css: CSSObject = {
    fontSize: FontSizes[size as keyof typeof FontSizes] || '1rem',
    fontWeight: FontWeights[weight as keyof typeof FontWeights] || 400,
    color: Colors[color as keyof typeof Colors] || Colors['text-color'],
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
    ...(height && { height: Sizes[height as keyof typeof Sizes] || height }),
    ...(minHeight && {
      minHeight: Sizes[minHeight as keyof typeof Sizes] || minHeight,
    }),
    ...(maxHeight && {
      maxHeight: Sizes[maxHeight as keyof typeof Sizes] || maxHeight,
    }),
    ...(radius && { borderRadius: `${radius}px` }),
    ...(margin && { margin }),
    ...(padding && { padding }),
  };

  return jsx('textarea', { css, ...props });
}
