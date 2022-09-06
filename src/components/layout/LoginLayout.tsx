import { ReactNode } from 'react';

import { useLogin } from '@/hooks/UseLogin';
import { useRequireLogin } from '@/hooks/UseRequireLogin';

import SideBar from '../atom/SideBar';

type Props = {
  children: ReactNode;
};

const LoginLayout = ({ children }: Props): JSX.Element => {
  const { login } = useLogin();
  useRequireLogin();
  return (
    <>
      {login.isLogin && (
        <div className="h-screen w-screen bg-white">
          <div className="flex h-full w-full flex-col justify-between md:flex-row md:justify-start">
            <SideBar />
            <div className="box-content flex flex-col overflow-y-auto md:w-5/6">
              <div className="mb-16 px-4 pt-6 md:mb-0">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginLayout;
