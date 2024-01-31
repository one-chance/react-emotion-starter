import { ComponentPropsWithRef, forwardRef, useState } from 'react';

import { CSSObject } from '@emotion/react';

import { Flex, Icon, Input, Label, Text } from '@components/shared';
import { Colors } from '@styles/index';

type TextFieldProps = ComponentPropsWithRef<typeof Input> & {
  as: 'underlined' | 'outlined';
  placeholder: string;
  border: keyof typeof Colors;
  background?: keyof typeof Colors;
  color?: keyof typeof Colors;
  error?: string;
  correct?: boolean;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      as,
      placeholder,
      background,
      border,
      color,
      error,
      correct,
      ...props
    }: TextFieldProps,
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const isEntered = isFocused || (props.value && props.value !== '');

    const wrapperCSS: CSSObject = {
      backgroundColor:
        Colors[background as keyof typeof Colors] || 'transparent',
      position: 'relative',
      ...(as === 'underlined' && {
        borderBottom: `1px solid ${
          isFocused ? Colors[border as keyof typeof Colors] : 'gray'
        }`,
        padding: '10px 0',
        marginTop: `10px`,
      }),
      ...(as === 'outlined' && {
        marginTop: '16px',
        border: `1px solid ${
          isFocused ? Colors[border as keyof typeof Colors] : 'gray'
        }`,
        borderRadius: '4px',
      }),
    };

    return (
      <Flex direction="column">
        <Flex
          css={wrapperCSS}
          onBlur={() => setIsFocused(false)}
          onClick={() => setIsFocused(true)}
        >
          <Label
            color={isFocused ? border : 'gray'}
            css={{
              position: 'absolute',
              top: 10,
              left: 0,
              lineHeight: `20px`,
              transformOrigin: `bottom left`,
              transition: `transform 0.3s cubic-bezier(.4,0,.2,1)`,
              ...(as === 'underlined' && {
                top: 10,
                left: 0,
                transform: isEntered ? `scale(.8) translateY(-30px)` : 'none',
              }),
              ...(as === 'outlined' && {
                top: 12,
                left: 10,
                transform: isEntered
                  ? `scale(.8) translate(-10px, -40px)`
                  : 'none',
              }),
            }}
          >
            {placeholder}
          </Label>

          <Input
            ref={ref}
            color={color}
            css={{
              padding: 0,
              ...(as === 'outlined' && {
                padding: '8px',
                borderColor: isFocused
                  ? Colors[border as keyof typeof Colors]
                  : 'gray',
                borderRadius: '4px',
              }),
            }}
            minHeight={as === 'underlined' ? 16 : 40}
            {...props}
          />

          {correct && <Icon color="green" name="correct" size={16} />}
        </Flex>

        {props.value !== '' && error && (
          <Text
            color="red"
            css={{ marginTop: '8px', lineHeight: 1, minHeight: 0 }}
            size="small"
          >
            {error}
          </Text>
        )}
      </Flex>
    );
  },
);

export default TextField;
