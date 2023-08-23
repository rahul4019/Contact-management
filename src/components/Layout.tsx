import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }: any) => {
  return (
    <div className="max-width bg-blue-200 min-h-screen flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
