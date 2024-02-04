import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Flex, Text } from '@components/shared';
import { useResponsive } from '@hooks/index';
import { capitalizeEachWord } from '@utils/index';

export default function GuideDocument() {
  const { t } = useTranslation();
  const path = 'guide.';
  const { pathname } = useLocation();
  const title = pathname.split('/')[3];
  const isMobile = useResponsive(500);

  const codeCSS = {
    margin: 0,
    borderRadius: '8px',
    fontSize: isMobile ? '12px' : '14px',
  };

  return (
    <Flex
      direction="column"
      gap={40}
      margin={isMobile ? '20px auto' : '40px auto'}
      maxWidth={800}
      padding={isMobile ? '0 10px' : '0 20px'}
      width="full"
    >
      <Text size={isMobile ? 'xxLarge' : 'xxxLarge'} weight="bold">
        {capitalizeEachWord(title)}
      </Text>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Installation
        </Text>

        <Text
          color="gray"
          css={{ lineHeight: 1.5, whiteSpace: 'pre-wrap' }}
          size={isMobile ? 'small' : 'normal'}
        >
          {t(`${path}installation-description`)}
        </Text>

        <SyntaxHighlighter
          children={`npx react-emotion-starter my-app\ncd my-app\nnpm run dev`}
          customStyle={codeCSS}
          language="bash"
          style={a11yDark}
        />
      </Flex>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Stack share
        </Text>

        <Text
          color="gray"
          css={{ lineHeight: 1.5, whiteSpace: 'pre-wrap' }}
          size={isMobile ? 'small' : 'normal'}
        >
          {t(`${path}stack-share-description`)}
        </Text>
      </Flex>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Features
        </Text>

        <Text
          color="gray"
          css={{ lineHeight: 1.5, whiteSpace: 'pre-wrap' }}
          size={isMobile ? 'small' : 'normal'}
        >
          {t(`${path}features-description`)}
        </Text>
      </Flex>

      <Flex direction="column" gap={20}>
        <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
          Roadmap
        </Text>

        <Text
          color="gray"
          css={{ lineHeight: 1.5, whiteSpace: 'pre-wrap' }}
          size={isMobile ? 'small' : 'normal'}
        >
          {t(`${path}roadmap-description`)}
        </Text>
      </Flex>
    </Flex>
  );
}