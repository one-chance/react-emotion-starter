import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { SidebarModal } from '@components/modal';
import { Box, Button, Flex, Icon, NavLink, Text } from '@components/shared';
import { useModal, useTheme } from '@hooks/index';

export default function Header() {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const language = i18n.language;
  const { theme, toggleTheme } = useTheme();
  const { closeModal, openModal, showModal } = useModal();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [showLanguage, setShowLanguage] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowLanguage(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowLanguage(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box
      as="header"
      background="background"
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 99,
        width: '100%',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.15)',
      }}
      height={60}
      padding="0 20px"
    >
      <Flex height="full" justifyContent="between">
        <Flex alignItems="center" gap={8}>
          {pathname.includes('docs') && (
            <Button onClick={() => openModal('sidebar-modal')}>
              <Icon color="icon-color" name="menu" size={24} />
            </Button>
          )}

          <NavLink size="large" to="/" weight="bold">
            RE Starter
          </NavLink>
        </Flex>

        <Flex alignItems="center" gap={8}>
          <Flex direction="row" justifyContent="end">
            <Button
              ref={buttonRef}
              height={36}
              width={36}
              onClick={() => setShowLanguage(!showLanguage)}
            >
              <Icon color="icon-color" name="language" size={24} />
            </Button>

            {showLanguage && (
              <Flex
                ref={wrapperRef}
                background="sidebar-background"
                border="black-200"
                css={{ position: 'absolute', marginTop: '36px' }}
                direction="column"
                minWidth={100}
                padding="10px"
                radius={8}
              >
                <Button
                  css={{ justifyContent: 'flex-start' }}
                  disabled={language === 'ko'}
                  minHeight={28}
                  onClick={() => changeLanguage('ko')}
                >
                  <Text>한국어</Text>
                </Button>

                <Button
                  css={{ justifyContent: 'flex-start' }}
                  disabled={language === 'en'}
                  minHeight={28}
                  onClick={() => changeLanguage('en')}
                >
                  <Text>English</Text>
                </Button>
              </Flex>
            )}
          </Flex>

          <Button height={36} radius={4} width={36} onClick={toggleTheme}>
            <Icon
              color="icon-color"
              name={theme === 'dark' ? 'lightMode' : 'darkMode'}
              size={24}
            />
          </Button>
        </Flex>
      </Flex>

      {showModal('sidebar-modal') && (
        <SidebarModal close={() => closeModal('sidebar-modal')} />
      )}
    </Box>
  );
}
