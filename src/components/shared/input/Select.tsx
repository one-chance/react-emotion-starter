import { ReactNode, useEffect, useRef, useState } from 'react';

import { Flex, Icon, Text } from '@components/shared';
import { Sizes } from '@styles/index';

type SelectProps = {
  name: string;
  children: ReactNode;
  maxHeight?: keyof typeof Sizes | number;
  disabled?: boolean;
};

export default function Select({
  name,
  children,
  maxHeight,
  disabled,
  ...props
}: SelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const autoClose = (e: CustomEvent<MouseEvent>) => {
      if (
        !selectRef.current?.contains(e.target as Node) &&
        !optionsRef.current?.contains(e.target as Node)
      ) {
        e.stopPropagation();
        setIsOpen(false);
      }
    };

    window.addEventListener(`mousedown`, autoClose as EventListener);

    return () => {
      window.removeEventListener(`mousedown`, autoClose as EventListener);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [name]);

  return (
    <Flex
      ref={selectRef}
      css={{ position: 'relative', userSelect: 'none', width: '100%' }}
      direction="column"
      pointer
      onClick={() => {
        if (!disabled) setIsOpen(!isOpen);
      }}
    >
      <Flex
        background="white"
        border="text-color"
        css={{ padding: '0 8px', lineHeight: '40px' }}
        gap={16}
        justifyContent="between"
        radius={4}
        {...props}
      >
        <Text color="black">{name}</Text>
        <Icon color="black" name={isOpen ? 'arrowUp' : 'arrowDown'} size={16} />
      </Flex>

      {isOpen && (
        <Flex
          ref={optionsRef}
          background="white"
          css={{
            position: 'absolute',
            marginTop: '42px',
            width: '100%',
            boxShadow: `0 0 2px rgba(0, 0, 0, 0.3)`,
          }}
          direction="column"
          maxHeight={maxHeight}
          noScrollbar={!!maxHeight}
          radius={4}
          zIndex={10}
        >
          {children}
        </Flex>
      )}
    </Flex>
  );
}
