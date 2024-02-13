import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, FontSizes, FontWeights, Sizes } from '@styles/index';

type ParagraphProps = ComponentProps<'p'> & {
  font?: string;
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeights;
  color?: keyof typeof Colors;
  background?: keyof typeof Colors;
  border?: keyof typeof Colors;
  center?: boolean;
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  margin?: string;
  padding?: string;
};

export default function Paragraph({
  font,
  size,
  weight,
  color,
  background,
  border,
  center,
  width,
  minWidth,
  maxWidth,
  margin,
  padding,
  ...props
}: ParagraphProps) {
  const css: CSSObject = {
    margin: 0,
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
    fontFamily: font || 'inherit',
    fontSize: FontSizes[size as keyof typeof FontSizes] || '1rem',
    fontWeight: FontWeights[weight as keyof typeof FontWeights] || 400,
    color: Colors[color as keyof typeof Colors] || Colors['text-color'],
    backgroundColor: Colors[background as keyof typeof Colors] || 'transparent',
    ...(border && {
      border: '1px solid',
      borderColor: Colors[border as keyof typeof Colors] || 'transparent',
    }),
    ...(center && { textAlign: 'center' }),
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

  return jsx('p', { css, ...props });
}
