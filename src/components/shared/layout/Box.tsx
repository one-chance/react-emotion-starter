import { ComponentPropsWithoutRef } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, Sizes } from '@styles/index';

type LayoutElement =
  | 'div'
  | 'header'
  | 'main'
  | 'footer'
  | 'aside'
  | 'nav'
  | 'section'
  | 'article';

export type BoxProps<T extends LayoutElement> = {
  as?: T;
  background?: keyof typeof Colors;
  border?: keyof typeof Colors;
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  height?: keyof typeof Sizes | number;
  minHeight?: keyof typeof Sizes | number;
  maxHeight?: keyof typeof Sizes | number;
  radius?: number;
  margin?: string;
  padding?: string;
} & ComponentPropsWithoutRef<T>;

export default function Box({
  as = 'div',
  background,
  border,
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
}: BoxProps<LayoutElement>) {
  const css: CSSObject = {
    display: 'block',
    backgroundColor: Colors[background as keyof typeof Colors] || '',
    ...(border && {
      border: '1px solid',
      borderColor: Colors[border as keyof typeof Colors] || 'black',
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
    ...(margin && { margin: margin }),
    ...(padding && { padding: padding }),
  };

  return jsx(as, { css, ...props });
}
