import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { Examples } from '@components/components-page';
import { Flex, Paragraph, Text } from '@components/shared';
import { PROPS } from '@constants/index';
import { useResponsive } from '@hooks/useResponsive';
import { Colors } from '@styles/token';
import { capitalizeEachWord } from '@utils/index';

export default function CompnentDocument() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = pathname.split('/')[3];
  const isMobile = useResponsive(500);

  const codeCSS = {
    margin: 0,
    borderRadius: '8px',
    fontSize: isMobile ? '12px' : '14px',
  };

  useEffect(() => {
    if (title === 'pagination') {
      navigate(`?page=1`);
    }
  }, [title]);

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
        {capitalizeEachWord(title).replace(' ', '')}
      </Text>

      <Flex direction="column" gap={40}>
        <Text color="gray" size={isMobile ? 'small' : 'normal'}>
          {t(`${title}.description`)}
        </Text>

        <Flex direction="column" gap={20}>
          <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
            Import
          </Text>

          <SyntaxHighlighter
            children={t(`${title}.import-code`)}
            customStyle={codeCSS}
            language="javascript"
          />
        </Flex>

        <Flex direction="column" gap={20}>
          <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
            Usage
          </Text>

          <Flex
            alignItems="center"
            border="gray"
            gap={16}
            minHeight={60}
            padding="10px"
            radius={4}
          >
            <Examples component={title} />
          </Flex>

          <SyntaxHighlighter
            children={t(`${title}.usage-code`)}
            customStyle={codeCSS}
            language="jsx"
          />
        </Flex>

        <Flex direction="column" gap={20}>
          <Text size={isMobile ? 'large' : 'xLarge'} weight="bold">
            Props
          </Text>

          <Paragraph color="gray" size={isMobile ? 'small' : 'normal'}>
            {t(`${title}.props-description`)}
          </Paragraph>

          <Flex direction="column">
            <Flex
              alignItems="center"
              css={{
                borderTop: `1px solid ${Colors['text-color']}`,
                borderBottom: `1px solid ${Colors['text-color']}`,
              }}
              minHeight={40}
            >
              <Text
                padding="2px 8px"
                size={isMobile ? 'small' : 'normal'}
                weight="bold"
                flex
              >
                Name
              </Text>
              <Text
                padding="2px 8px"
                size={isMobile ? 'small' : 'normal'}
                weight="bold"
                flex
              >
                Type
              </Text>
              <Text
                padding="2px 8px"
                size={isMobile ? 'small' : 'normal'}
                weight="bold"
                flex
              >
                Property
              </Text>
              <Text
                padding="2px 8px"
                size={isMobile ? 'small' : 'normal'}
                weight="bold"
                flex
              >
                Defualt
              </Text>
            </Flex>

            {PROPS?.[title as keyof typeof PROPS]?.map(
              (prop: { [key: string]: string }) => (
                <Flex
                  key={prop.name}
                  alignItems="center"
                  css={{ borderBottom: `1px solid ${Colors['text-color']}` }}
                  minHeight={36}
                >
                  <Text
                    css={{ wordBreak: 'break-word' }}
                    padding="4px"
                    size={isMobile ? 'small' : 'normal'}
                    flex
                  >
                    {prop.name}
                  </Text>
                  <Text
                    css={{ wordBreak: 'break-word' }}
                    padding="4px"
                    size={isMobile ? 'small' : 'normal'}
                    flex
                  >
                    {prop.type}
                  </Text>
                  <Text
                    css={{ wordBreak: 'break-word' }}
                    padding="4px"
                    size={isMobile ? 'small' : 'normal'}
                    flex
                  >
                    {prop.property}
                  </Text>
                  <Text
                    css={{ wordBreak: 'break-word' }}
                    padding="4px"
                    size={isMobile ? 'small' : 'normal'}
                    flex
                  >
                    {prop.default}
                  </Text>
                </Flex>
              ),
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
