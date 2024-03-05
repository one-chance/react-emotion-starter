import { ComponentProps, forwardRef } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, Sizes } from '@styles/index';

type GridProps = ComponentProps<'div'> & {
  rows?: string;
  columns?: string;
  auto?: 'row' | 'column' | 'dense';
  gap?: string;
  radius?: number;
  background?: keyof typeof Colors; // background-color
  border?: keyof typeof Colors; // border-color
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

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      rows,
      columns,
      auto,
      gap,
      radius,
      background,
      border,
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
    }: GridProps,
    ref,
  ) => {
    const css: CSSObject = {
      display: 'grid',
      backgroundColor:
        Colors[background as keyof typeof Colors] || 'transparent',
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      gridGap: gap,
      ...(flex && { flex: 1 }),
      ...(border && { border: `1px solid ${border}` }),
      ...(radius && { borderRadius: radius }),
      ...(auto && { gridAutoFlow: auto }),
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
      ...(margin && { margin }),
      ...(padding && { padding }),
    };

    return jsx('div', { ref, css, ...props });
  },
);

export default Grid;
