import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors } from '@styles/index';

type HeadingProps = ComponentProps<'h1'> & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  margin?: string;
  color?: keyof typeof Colors;
};

export default function Heading({ as, margin, color, ...props }: HeadingProps) {
  const css: CSSObject = {
    color: Colors[color as keyof typeof Colors] || 'black',
    ...(margin && { margin: margin }),
  };

  return jsx(as, { css, ...props });
}
