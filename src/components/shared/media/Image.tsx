import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

type ImageProps = ComponentProps<'img'> & {
  ratio?: string;
  margin?: string;
  padding?: string;
};

export default function Image({
  ratio,
  margin,
  padding,
  ...props
}: ImageProps) {
  const css: CSSObject = {
    ...(ratio && { aspectRatio: ratio }),
    ...(margin && { margin }),
    ...(padding && { padding }),
  };

  return jsx('img', { css, ...props });
}
