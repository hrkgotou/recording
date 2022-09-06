import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useLogin } from './UseLogin';

export const useRequireLogin = () => {
  const { login } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (!login.isAuthed || !router.isReady) return;
    if (!login.isLogin) void router.push('/login');
  }, [login.isAuthed, login.isLogin, router]);
};
