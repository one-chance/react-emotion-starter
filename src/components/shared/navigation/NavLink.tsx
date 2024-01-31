import { CSSObject } from '@emotion/react';
import { Link, LinkProps } from 'react-router-dom';

import { Colors, FontSizes, FontWeights, Sizes } from '@styles/index';

type NavLinkProps = LinkProps & {
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

export default function NavLink({
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
}: NavLinkProps) {
  const css: CSSObject = {
    fontSize: FontSizes[size as keyof typeof FontSizes] || '1rem',
    fontWeight: FontWeights[weight as keyof typeof FontWeights] || 400,
    backgroundColor: Colors[background as keyof typeof Colors] || 'transparent',
    color: Colors[color as keyof typeof Colors] || Colors['text-color'],
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
    ...(margin && { margin: margin }),
    ...(padding && { padding: padding }),
  };

  return <Link css={css} {...props} />;
}
