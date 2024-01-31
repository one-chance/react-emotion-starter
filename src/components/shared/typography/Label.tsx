import { ComponentProps } from 'react';

import { CSSObject, jsx } from '@emotion/react';

import { Colors, FontSizes, FontWeights } from '@styles/index';

type LabelProps = ComponentProps<'label'> & {
  font?: string;
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeights;
  color?: keyof typeof Colors;
};

export default function Label({
  font,
  size,
  weight,
  color,
  ...props
}: LabelProps) {
  const css: CSSObject = {
    fontFamily: font || 'inherit',
    fontSize: FontSizes[size as keyof typeof FontSizes] || '1rem',
    fontWeight: FontWeights[weight as keyof typeof FontWeights] || 400,
    color: Colors[color as keyof typeof Colors] || 'black',
  };
  return jsx('label', { css, ...props });
}
