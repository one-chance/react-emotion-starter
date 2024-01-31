import { Route, Routes } from 'react-router-dom';

import { Header } from '@components/layout';

export default function HeaderRouter() {
  return (
    <Routes>
      <Route element={<Header />} path="*" />
    </Routes>
  );
}
