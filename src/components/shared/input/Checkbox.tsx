import { ComponentProps, useState } from 'react';

import { CSSObject } from '@emotion/react';

import { Flex, Icon, Input, Text } from '@components/shared';
import { Colors, FontSizes } from '@styles/index';

type CheckoxProps = ComponentProps<typeof Input> & {
  label?: string;
  labelSize?: keyof typeof FontSizes;
  labelColor?: keyof typeof Colors;
  iconSize?: number;
  iconColor?: keyof typeof Colors;
};

export default function Checkbox({
  label,
  labelSize,
  labelColor,
  iconSize,
  iconColor,
  ...props
}: CheckoxProps) {
  const [checked, setChecked] = useState(props.checked || false);

  const checking = () => {
    setChecked(!checked);
  };

  const checkboxCSS: CSSObject = {
    backgroundColor: 'white',
    minWidth: 0,
    width: 0,
    minHeight: 0,
    margin: 0,
  };

  return (
    <Flex alignItems="center" pointer onClick={checking}>
      <Input checked={checked} css={checkboxCSS} type="checkbox" {...props} />

      <Icon
        border="gray"
        color={iconColor || 'black'}
        name={checked ? 'checked' : 'checkbox'}
        radius={4}
        size={iconSize || 18}
      />

      <Text
        color={labelColor}
        css={{ lineHeight: 1, marginLeft: '8px' }}
        size={labelSize}
      >
        {label}
      </Text>
    </Flex>
  );
}
