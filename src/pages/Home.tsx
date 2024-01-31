import { CSSObject } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import { Flex, Image, Link, NavLink, Text } from '@components/shared';
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
          <Link href="https://react.dev">
            <Image
              alt="React logo"
              css={logoCSS}
              src="/src/assets/icons/react.svg"
            />
          </Link>

          <Link href="https://www.typescriptlang.org">
            <Image
              alt="TypeScript logo"
              css={logoCSS}
              src="/src/assets/icons/typescript.svg"
            />
          </Link>

          <Link href="https://emotion.sh/docs/introduction">
            <Image
              alt="Emotion logo"
              css={logoCSS}
              src="/src/assets/icons/emotion.svg"
            />
          </Link>

          <Link href="https://vitejs.dev">
            <Image
              alt="Vite logo"
              css={logoCSS}
              src="/src/assets/icons/vite.svg"
            />
          </Link>
        </Flex>

        <Text
          color="white"
          css={{ fontSize: isMobile ? '36px' : '48px' }}
          weight="bold"
          center
        >
          React Emotion Starter
        </Text>

        <Text
          color="gray"
          padding="0 13px"
          size={isMobile ? 'normal' : 'large'}
          center
        >
          {t('home.description1')}
          <br />
          {t('home.description2')}
        </Text>

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
            background="primary"
            color="white"
            href="https://github.com/one-chance"
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
