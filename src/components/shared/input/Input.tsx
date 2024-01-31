import { ComponentProps, forwardRef } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, Sizes } from '@styles/index';

type InputProps = {
  background?: keyof typeof Colors;
  border?: keyof typeof Colors;
  color?: keyof typeof Colors;
  radius?: number;
  padding?: string;
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  height?: keyof typeof Sizes | number;
  minHeight?: keyof typeof Sizes | number;
  maxHeight?: keyof typeof Sizes | number;
} & ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      background,
      border,
      color,
      radius,
      padding,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      ...props
    }: InputProps,
    ref,
  ) => {
    const css: CSSObject = {
      width: '100%',
      outline: 'none',
      backgroundColor:
        Colors[background as keyof typeof Colors] || 'transparent',
      border: 'none',
      color: Colors[color as keyof typeof Colors] || Colors['text-color'],
      minHeight: '40px',
      borderRadius: radius ? `${radius}px` : '0',
      ...(border && {
        border: '1px solid',
        borderColor: Colors[border as keyof typeof Colors] || 'black',
      }),
      padding: padding || '0 8px',
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
    };

    return jsx('input', { ref, css, ...props });
  },
);

export default Input;
