import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { Box, Flex, Icon, NavLink, Text } from '@components/shared';
import { COMPONENTS, THEMES, GUIDES } from '@constants/index';
import { useResponsive } from '@hooks/index';
import { Colors } from '@styles/token';
import { capitalizeEachWord } from '@utils/commonUtils';

export default function Sidebar() {
  const { pathname } = useLocation();
  const category = pathname.split('/')[2];

  const [isSelected, setIsSelected] = useState(pathname.split('/')[3]);

  const [isOpen, setIsOpen] = useState({
    guide: category === 'guide' ? true : false,
    theme: category === 'theme' ? true : false,
    components: category === 'components' ? true : false,
  });

  const isMobile = useResponsive(1080);

  const handleTitleOpen = (name: 'components' | 'theme' | 'guide') => {
    setIsOpen({ ...isOpen, [name]: !isOpen[name] });
  };

  const selectDocument = (name: string) => {
    setIsSelected(name);
  };

  return (
    !isMobile && (
      <Box
        as="aside"
        background="sidebar-background"
        css={{ position: 'fixed', top: 0, bottom: 0, zIndex: 100 }}
        minWidth={240}
      >
        <Flex
          background="sidebar-background"
          direction="column"
          height="full"
          padding="0 20px"
        >
          <Flex alignItems="center" minHeight={60}>
            <NavLink size="large" to="/" weight="bold">
              RE Starter
            </NavLink>
          </Flex>

          <Box
            as="nav"
            css={{
              margin: '20px 0',
              overflowY: 'auto',
              scrollbarWidth: `none`,
              '::-webkit-scrollbar': { display: 'none' },
            }}
          >
            <Flex direction="column" gap={8} padding="10px 0 0 0">
              <Flex
                gap={8}
                height={32}
                padding="8px 0"
                pointer
                onClick={() => handleTitleOpen('guide')}
              >
                <Icon
                  color="icon-color"
                  name={isOpen.guide ? 'arrowDown' : 'arrowRight'}
                  size={16}
                />

                <Text css={{ userSelect: 'none', lineHeight: 1 }} weight="bold">
                  Guide
                </Text>
              </Flex>

              <Flex
                css={{
                  paddingLeft: '24px',
                  maxHeight: isOpen.guide ? '1000px' : '0',
                  transition: 'max-height 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  overflow: 'hidden',
                }}
                direction="column"
                gap={4}
              >
                {GUIDES.map(guide => (
                  <Flex key={guide} direction="column" gap={4}>
                    <NavLink
                      color="black-500"
                      css={{
                        paddingLeft: '8px',
                        lineHeight: '32px',
                        ...(isSelected === guide.toLowerCase() && {
                          borderRadius: '4px',
                          backgroundColor: Colors.dim,
                          color: `${Colors.white} !important`,
                        }),
                      }}
                      size="small"
                      to={`/docs/guide/${guide.toLowerCase()}`}
                      weight="medium"
                      onClick={() => selectDocument(guide.toLowerCase())}
                    >
                      {capitalizeEachWord(guide)}
                    </NavLink>
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex direction="column" gap={8} padding="10px 0 0 0">
              <Flex
                gap={8}
                height={32}
                padding="8px 0"
                pointer
                onClick={() => handleTitleOpen('theme')}
              >
                <Icon
                  color="icon-color"
                  name={isOpen.theme ? 'arrowDown' : 'arrowRight'}
                  size={16}
                />

                <Text css={{ userSelect: 'none', lineHeight: 1 }} weight="bold">
                  Theme
                </Text>
              </Flex>

              <Flex
                css={{
                  paddingLeft: '24px',
                  maxHeight: isOpen.theme ? '1000px' : '0',
                  transition: 'max-height 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  overflow: 'hidden',
                }}
                direction="column"
                gap={4}
              >
                {THEMES.map(theme => (
                  <Flex key={theme} direction="column" gap={4}>
                    <NavLink
                      color="black-500"
                      css={{
                        paddingLeft: '8px',
                        lineHeight: '32px',
                        ...(isSelected === theme.toLowerCase() && {
                          borderRadius: '4px',
                          backgroundColor: Colors.dim,
                          color: `${Colors.white} !important`,
                        }),
                      }}
                      size="small"
                      to={`/docs/theme/${theme.toLowerCase()}`}
                      weight="medium"
                      onClick={() => selectDocument(theme.toLowerCase())}
                    >
                      {capitalizeEachWord(theme)}
                    </NavLink>
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex direction="column" gap={8} padding="10px 0 0 0">
              <Flex
                gap={8}
                height={32}
                padding="8px 0"
                pointer
                onClick={() => handleTitleOpen('components')}
              >
                <Icon
                  color="icon-color"
                  name={isOpen.components ? 'arrowDown' : 'arrowRight'}
                  size={16}
                />

                <Text css={{ userSelect: 'none', lineHeight: 1 }} weight="bold">
                  Components
                </Text>
              </Flex>

              <Flex
                css={{
                  paddingLeft: '24px',
                  maxHeight: isOpen.components ? '1000px' : '0',
                  transition: 'max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  overflow: 'hidden',
                }}
                direction="column"
                gap={16}
              >
                {COMPONENTS.map(component => (
                  <Flex key={component.main} direction="column" gap={4}>
                    <Text
                      color="primary"
                      css={{ lineHeight: 2 }}
                      size="small"
                      weight="bold"
                    >
                      {component.main}
                    </Text>

                    <Flex direction="column">
                      {component.sub.map((sub: string) => (
                        <NavLink
                          key={sub}
                          color="black-500"
                          css={{
                            paddingLeft: '8px',
                            lineHeight: '32px',
                            ...(isSelected === sub.toLowerCase() && {
                              borderRadius: '4px',
                              backgroundColor: Colors.dim,
                              color: `${Colors.white} !important`,
                            }),
                          }}
                          size="small"
                          to={`/docs/components/${sub.toLowerCase()}`}
                          weight="medium"
                          onClick={() => selectDocument(sub.toLowerCase())}
                        >
                          {capitalizeEachWord(sub)}
                        </NavLink>
                      ))}
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    )
  );
}
