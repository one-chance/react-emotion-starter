import { Route, Routes } from 'react-router-dom';

import { Home, NotFound } from '@pages/index';

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}
