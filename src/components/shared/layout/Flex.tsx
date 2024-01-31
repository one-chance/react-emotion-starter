import { ComponentPropsWithRef, forwardRef } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, Sizes } from '@styles/index';

interface FlexboxProps {
  justifyContent?: keyof typeof JustifyContent;
  alignItems?: keyof typeof AlignItems;
  alignContents?: keyof typeof AlignContents;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'; // flex-direction
  wrap?: boolean; // flex-wrap
  flex?: boolean; // flex: 1
  gap?: number;
}

interface SizeProps {
  width?: keyof typeof Sizes | number;
  minWidth?: keyof typeof Sizes | number;
  maxWidth?: keyof typeof Sizes | number;
  height?: keyof typeof Sizes | number;
  minHeight?: keyof typeof Sizes | number;
  maxHeight?: keyof typeof Sizes | number;
}

interface StyleProps {
  background?: keyof typeof Colors; // background-color
  border?: keyof typeof Colors; // border-color
  margin?: string;
  padding?: string;
  fixed?: boolean; // position: fixed, top:0, left:0, width: 100%, height: 100%
  noScrollbar?: boolean; // overflow-y: auto, scrollbar-width: none, ::-webkit-scrollbar { display: none; }
  radius?: number; // border-radius
  zIndex?: number; // z-index
  pointer?: boolean; // cursor: pointer
}

type FlexProps = ComponentPropsWithRef<'div'> &
  FlexboxProps &
  SizeProps &
  StyleProps;

const JustifyContent = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  between: `space-between`,
  around: `space-around`,
  evenly: `space-evenly`,
};

const AlignItems = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  stretch: `stretch`,
};

const AlignContents = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  stretch: `stretch`,
  between: `space-between`,
  around: `space-around`,
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction,
      justifyContent,
      alignItems,
      alignContents,
      wrap,
      flex,
      gap,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      background,
      border,
      fixed,
      radius,
      zIndex,
      noScrollbar,
      margin,
      padding,
      pointer,
      ...props
    }: FlexProps,
    ref,
  ) => {
    const css: CSSObject = {
      display: 'flex',
      flexDirection: direction || 'row',
      backgroundColor:
        Colors[background as keyof typeof Colors] || 'transparent',
      gap: gap || 0,
      ...(justifyContent && { justifyContent: JustifyContent[justifyContent] }),
      ...(alignItems && { alignItems: AlignItems[alignItems] }),
      ...(alignContents && { alignContent: AlignContents[alignContents] }),
      ...(wrap && { flexWrap: 'wrap' }),
      ...(flex && { flex: 1 }),
      ...(fixed && {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }),
      ...(border && {
        border: '1px solid',
        borderColor: Colors[border as keyof typeof Colors] || 'black',
      }),
      ...(radius && { borderRadius: radius }),
      ...(noScrollbar && {
        overflowY: `auto`,
        scrollbarWidth: `none`,
        '::-webkit-scrollbar': { display: 'none' },
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
      ...(zIndex && { zIndex: zIndex }),
      ...(pointer && { cursor: 'pointer' }),
    };

    return jsx('div', { ref, css, ...props });
  },
);

export default Flex;
