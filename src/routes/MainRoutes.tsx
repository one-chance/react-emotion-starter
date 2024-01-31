import { Route, Routes } from 'react-router-dom';

import {
  ComponentDocument,
  GuideDocument,
  Home,
  NotFound,
  ThemeDocument,
} from '@pages/index';

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<GuideDocument />} path="/docs/guide/:guide" />
      <Route element={<ThemeDocument />} path="/docs/theme/:theme" />
      <Route
        element={<ComponentDocument />}
        path="/docs/components/:component"
      />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}
