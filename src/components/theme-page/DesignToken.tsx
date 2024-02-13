import { useTranslation } from 'react-i18next';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Flex, Paragraph, Text } from '@components/shared';

type DocumentProps = {
  isMobile: boolean;
};

export default function DesignToken({ isMobile }: DocumentProps) {
  const { t } = useTranslation();
  const path = 'design-token.';

  const codeCSS = {
    margin: 0,
    borderRadius: '8px',
    fontSize: isMobile ? `12px` : '14px',
  };

  return (
    <Flex direction="column" gap={isMobile ? 40 : 60}>
      <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
        {t(`${path}description`)}
      </Paragraph>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Fonts Token
        </Text>

        <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}font-token-description`)}
        </Paragraph>

        <SyntaxHighlighter
          children={`const FontSizes = {\n\txxSmall: '0.625rem',\n\txSmall: '0.75rem',\n\tsmall: '0.874rem',\n\tnormal: '1rem',\n\tlarge: '1.25rem',\n\txLarge: '1.5rem',\n\txxLarge: '1.75rem',\n\txxxLarge: '2rem',\n};`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />

        <SyntaxHighlighter
          children={`const FontWeights = {\n\tthin: 100,\n\textraLight: 200,\n\tlight: 300,\n\tnormal: 400,\n\tmedium: 500,\n\tsemiBold: 600,\n\tbold: 700,\n\textraBold: 800,\n\tblack: 900\n};`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />
      </Flex>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Sizes Token
        </Text>

        <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}size-token-description`)}
        </Paragraph>

        <SyntaxHighlighter
          children={`const Sizes = {\n\tmax: 'max-content',\n\tmin: 'min-content',\n\tfit: 'fit-content',\n\tfull: '100%',\n\tauto: 'auto',\n\t0 : '0',\n\t's-90': '90%',\n\t's-80': '80%',\n\t's-70': '70%',\n\t's-60': '60%',\n\t's-50': '50%',\n\t's-40': '40%',\n\t's-30': '30%',\n\t's-20': '20%',\n\t's-10': '10%',\n};`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />
      </Flex>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Colors Token
        </Text>

        <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}color-token-description`)}
        </Paragraph>

        <SyntaxHighlighter
          children={`const Colors = {\n\tblack: 'var(--color-black)',\n\twhite: 'var(--color-white)',\n\tgray: 'var(--color-gray)',\n\tgreen: 'var(--color-green)',\n\tred: 'var(--color-red)',\n\tdim: 'var(--color-dim)',\n\tprimary: 'var(--color-primary)',\n\tsecondary: 'var(--color-secondary)',\n\t'sidebar-background': 'var(--sidebar-background)',\n\tbackground: 'var(--background-color)',\n\t'text-color': 'var(--text-color)',\n\t'icon-color': 'var(--icon-color)',\n};`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />
      </Flex>
    </Flex>
  );
}
