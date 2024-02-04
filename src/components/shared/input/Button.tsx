import { ComponentPropsWithRef, forwardRef } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, FontSizes, FontWeights, Sizes } from '@styles/index';

type ButtonProps = ComponentPropsWithRef<'button'> & {
  font?: string;
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeights;
  background?: keyof typeof Colors;
  border?: keyof typeof Colors;
  color?: keyof typeof Colors;
  radius?: number;
  flex?: boolean;
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  height?: keyof typeof Sizes | number;
  minHeight?: keyof typeof Sizes | number;
  maxHeight?: keyof typeof Sizes | number;
  margin?: string;
  padding?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      font,
      size,
      weight,
      background,
      border,
      color,
      radius,
      flex,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      margin,
      padding,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const css: CSSObject = {
      display: 'inline-flex',
      alignItems: 'center',
      color: Colors[color as keyof typeof Colors] || Colors['text-color'],
      justifyContent: 'center',
      fontFamily: font || 'inherit',
      fontSize: FontSizes[size as keyof typeof FontSizes] || '1rem',
      fontWeight: FontWeights[weight as keyof typeof FontWeights] || 400,
      backgroundColor:
        Colors[background as keyof typeof Colors] || 'transparent',
      border: 'none',
      outline: 'none',
      margin: 0,
      padding: 0,
      ':not(:disabled)': {
        cursor: `pointer`,
      },
      ':disabled': {
        pointerEvents: 'none',
        filter: 'opacity(50%)',
      },
      ...(flex && { flex: 1 }),
      ...(radius && { borderRadius: `${radius}px` }),
      ...(border && {
        border: '1px solid',
        borderColor: Colors[(border as keyof typeof Colors) || 'black'],
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
      ...(margin && { margin: margin }),
      ...(padding && { padding: padding }),
    };

    return jsx('button', { ref, css, ...props });
  },
);

export default Button;
