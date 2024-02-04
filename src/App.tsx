import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useTheme } from '@hooks/index';
import { HeaderRouter, MainRouter } from '@routes/index';
import { globalStyle } from '@styles/index';

function App() {
  const { theme } = useTheme();
  const queryClient = new QueryClient();
  document.documentElement.setAttribute('color-theme', theme);

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyle} />

      <HeaderRouter />
      <MainRouter />
    </QueryClientProvider>
  );
}

export default App;
