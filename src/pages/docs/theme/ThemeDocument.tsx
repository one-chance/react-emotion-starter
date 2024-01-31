import { useLocation } from 'react-router-dom';

import { Flex, Text } from '@components/shared';
import { ColorPalette, DarkMode, DesignToken } from '@components/theme-page';
import { useResponsive } from '@hooks/useResponsive';
import { capitalizeEachWord } from '@utils/index';

export default function CompnentDocument() {
  const { pathname } = useLocation();
  const title = pathname.split('/')[3];
  const isMobile = useResponsive(500);

  const contents: { [key: string]: JSX.Element } = {
    'color-palette': <ColorPalette isMobile={isMobile} />,
    'dark-mode': <DarkMode isMobile={isMobile} />,
    'design-token': <DesignToken isMobile={isMobile} />,
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

      {contents[title]}
    </Flex>
  );
}
