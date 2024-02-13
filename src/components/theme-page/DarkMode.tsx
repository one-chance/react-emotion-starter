import { useTranslation } from 'react-i18next';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Flex, Paragraph, Text } from '@components/shared';

type DocumentProps = {
  isMobile: boolean;
};

export default function DarkMode({ isMobile }: DocumentProps) {
  const { t } = useTranslation();
  const path = 'dark-mode.';

  const codeCSS = {
    margin: 0,
    borderRadius: '8px',
    fontSize: isMobile ? '12px' : '14px',
  };

  return (
    <Flex direction="column" gap={isMobile ? 40 : 60}>
      <Text color="gray" size={isMobile ? 'small' : 'normal'}>
        {t(`${path}description`)}
      </Text>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Default Mode
        </Text>

        <Flex direction="column" gap={4}>
          <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
            {t(`${path}default-mode-description`)}
          </Paragraph>
        </Flex>
      </Flex>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Toggling Mode
        </Text>

        <SyntaxHighlighter
          children={`import { useTheme } from "@hooks/index";\n\nconst { theme, toggleTheme } = useTheme();`}
          customStyle={codeCSS}
          language="jsx"
          style={a11yDark}
        />

        <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}toggling-mode-description`)}
        </Paragraph>
      </Flex>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Usage
        </Text>

        <Text color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}usage-description`)}
        </Text>

        <SyntaxHighlighter
          children={`// global.ts\nimport { css } from "@emotion/react";\n\nexport const globalStyle = css\`\n\thtml[color-theme='light'] {\n\t\t--text-color: var(--color-black);\n\t}\n\t\n\thtml[color-theme='dark'] {\n\t\t--text-color: var(--color-white);\n\t}\n\`;`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />

        <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}usage-guide1`)}
        </Paragraph>

        <SyntaxHighlighter
          children={`// token.ts\nexport const Colors = {\n\t"text-color": "var(--text-color)",\n};`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />

        <Text color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}usage-guide2`)}
        </Text>

        <SyntaxHighlighter
          children={`<Text color="text-color">텍스트</Text>`}
          customStyle={codeCSS}
          language="javascript"
          style={a11yDark}
        />

        <Text color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${path}usage-guide3`)}
        </Text>
      </Flex>
    </Flex>
  );
}
