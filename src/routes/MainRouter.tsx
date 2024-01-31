import { Box } from '@components/shared';
import { useResponsive } from '@hooks/useResponsive';

import MainRoutes from './MainRoutes';

export default function MainRouter() {
  const isMobile = useResponsive(1080);

  return (
    <Box
      as="main"
      css={{ display: 'flex' }}
      padding={isMobile ? '60px 0' : '60px 0 0 240px'}
      width="full"
    >
      <MainRoutes />
    </Box>
  );
}
