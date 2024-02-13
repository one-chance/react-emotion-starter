import { CSSObject } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import {
  Flex,
  Image,
  Link,
  NavLink,
  Paragraph,
  Text,
} from '@components/shared';
import { useResponsive } from '@hooks/useResponsive';

export default function Home() {
  const { t } = useTranslation();
  const isMobile = useResponsive(600);

  const logoCSS: CSSObject = {
    height: isMobile ? '4rem' : '6em',
    padding: isMobile ? '0.5rem' : '1.5em',
    willChange: 'filter',
    transition: 'filter 300ms',
    ':hover': {
      filter: 'drop-shadow(0 0 2em #646cffaa)',
    },
  };

  return (
    <Flex
      css={{ position: 'absolute', left: 0, right: 0 }}
      padding="200px 20px"
    >
      <Flex
        alignItems="center"
        direction="column"
        gap={40}
        justifyContent="center"
        margin="0 auto"
        maxWidth={800}
      >
        <Flex gap={16} justifyContent="center">
          <Link
            aria-label="react site"
            href="https://react.dev"
            minWidth={isMobile ? 64 : 96}
          >
            <Image alt="React" css={logoCSS} src="/logo/react.svg" />
          </Link>

          <Link
            aria-label="typescript site"
            href="https://www.typescriptlang.org"
            minWidth={isMobile ? 64 : 96}
          >
            <Image alt="TypeScript" css={logoCSS} src="/logo/typescript.svg" />
          </Link>

          <Link
            aria-label="emotion site"
            href="https://emotion.sh/docs/introduction"
            minWidth={isMobile ? 64 : 96}
          >
            <Image alt="Emotion" css={logoCSS} src="/logo/emotion.svg" />
          </Link>

          <Link
            aria-label="vite iste"
            href="https://vitejs.dev"
            minWidth={isMobile ? 64 : 96}
          >
            <Image alt="Vite" css={logoCSS} src="/logo/vite.svg" />
          </Link>
        </Flex>

        <Text
          color="text-color"
          css={{ fontSize: isMobile ? '36px' : '48px' }}
          weight="bold"
          center
        >
          React Emotion Starter
        </Text>

        <Paragraph
          color="gray"
          padding="0 13px"
          size={isMobile ? 'normal' : 'large'}
          center
        >
          {t('home.description')}
        </Paragraph>

        <Flex alignItems="center" gap={16}>
          <NavLink
            border="text-color"
            color="text-color"
            padding="10px 0"
            radius={8}
            size={isMobile ? 'normal' : 'large'}
            to="/docs/guide/getting-started"
            weight="bold"
            width={isMobile ? 120 : 140}
            center
          >
            {t('home.start')}
          </NavLink>

          <Link
            aria-label="github site"
            background="primary"
            color="white"
            href="https://github.com/one-chance/react-emotion-starter"
            padding="10px 0"
            radius={8}
            size={isMobile ? 'normal' : 'large'}
            weight="bold"
            width={isMobile ? 120 : 140}
            center
          >
            Github
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
