import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { removeStorage } from '@/lib/StorageMock';
import { loginDefaultValue, loginState } from '@/recoil/LoginAtom';

const Logout = (): JSX.Element => {
  const setLogin = useSetRecoilState(loginState);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    setLogin(loginDefaultValue);
    removeStorage();
    void router.push('/login');
  }, [router, setLogin]);

  return <></>;
};

export default Logout;
