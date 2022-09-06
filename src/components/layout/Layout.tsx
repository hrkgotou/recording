import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <div className="flex h-screen bg-slate-200">
        <div className="mx-auto">{children}</div>
      </div>
    </>
  );
};

export default Layout;
