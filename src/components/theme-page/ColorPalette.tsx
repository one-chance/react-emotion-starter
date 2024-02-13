import { useTranslation } from 'react-i18next';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Box, Flex, Paragraph, Text } from '@components/shared';
import { Colors } from '@styles/index';

type DocumentProps = {
  isMobile: boolean;
};

export default function ColorPalette({ isMobile }: DocumentProps) {
  const { t } = useTranslation();
  const path = 'color-palette.';

  const codeCSS = {
    margin: 0,
    borderRadius: '8px',
    fontSize: isMobile ? `12px` : '14px',
  };

  const COLOR_LIST = [
    {
      name: 'black',
      hex: '#000000',
    },
    {
      name: 'white',
      hex: '#FFFFFF',
    },
    {
      name: 'gray',
      hex: '#808080',
    },
    {
      name: 'green',
      hex: '#008000',
    },
    {
      name: 'red',
      hex: '#FF0000',
    },
    {
      name: 'dim',
      hex: '#0000004D',
    },
  ];

  return (
    <Flex direction="column" gap={isMobile ? 40 : 60}>
      <Text color="gray">{t(`${path}description`)}</Text>

      <Flex direction="column" gap={10}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Default Colors
        </Text>
        <Text color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}default-color-description`)}
        </Text>

        <Flex gap={16} wrap>
          {COLOR_LIST.map(color => (
            <Flex alignItems="center" gap={8}>
              <Box
                background={color.name as keyof typeof Colors}
                css={{ boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)' }}
                height={48}
                radius={8}
                width={48}
              />
              <Flex direction="column">
                <Text size={isMobile ? 'small' : 'normal'}>{color.name}</Text>
                <Text size={isMobile ? 'xSmall' : 'small'}>{color.hex}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Customization
        </Text>

        <Text color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}customization-description`)}
        </Text>

        <SyntaxHighlighter
          children={`// global.ts\nimport { css } from "@emotion/react";\n\nexport const globalStyle = css\`\n\t:root {\n\t\t--color-black: #000000;\n\t\t--color-white: #FFFFFF;\n\t}\n\`;`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />

        <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}customization-guide1`)}
        </Paragraph>

        <SyntaxHighlighter
          children={`// token.ts\nexport const Colors = {\n\tblack: "var(--color-black)",\n\twhite: "var(--color-white)"\n};`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />
        <Text color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}customization-guide2`)}
        </Text>

        <SyntaxHighlighter
          children={`<Text border="white" color="black">text</Text>\n// { border: "1px solid #FFFFFF", color: "#000000" }`}
          language="javascript"
          style={a11yDark}
        />
        <Text color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}customization-guide3`)}
        </Text>
      </Flex>
    </Flex>
  );
}
