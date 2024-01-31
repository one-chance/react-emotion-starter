import { Route, Routes } from 'react-router-dom';

import { Sidebar } from '@components/layout';

export default function SidebarRouter() {
  return (
    <Routes>
      <Route element={<Sidebar />} path="/docs/:title/:comtent" />
      <Route element={null} path="/" />
    </Routes>
  );
}
