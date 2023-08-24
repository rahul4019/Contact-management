import Sidebar from './Sidebar';

const Layout = ({ children }: any) => {
  return (
    <div className="max-width min-h-screen flex">
      <Sidebar />
      <div className="w-full max-h-screen overflow-y-scroll hide-scrollbar"> {children}</div>
    </div>
  );
};

export default Layout;
