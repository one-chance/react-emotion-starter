import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

type SvgProps = ComponentProps<'svg'> & {
  width?: number;
  height?: number;
  fill?: string;
  margin?: string;
  padding?: string;
};

export default function Svg({
  width,
  height,
  fill,
  margin,
  padding,
  ...props
}: SvgProps) {
  const minWidth = width && width > 24 ? width : 24;
  const minHeight = height && height > 24 ? height : 24;

  const viewBox = `0 0 ${minWidth} ${minHeight}`;

  const css: CSSObject = {
    ...(margin && { margin }),
    ...(padding && { padding }),
  };

  return jsx('svg', {
    css,
    viewBox,
    focusable: false,
    pointerevent: 'none',
    width,
    height,
    fill: fill || 'currentColor',
    ...props,
  });
}
