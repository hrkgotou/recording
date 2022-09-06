import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';

import Alert from '@/components/atom/ToastAlert';
import PageMap from '@/const/PageMap';
import { useLogin } from '@/hooks/UseLogin';
import { getStrage, setStorage } from '@/lib/StorageMock';
import { loginState } from '@/recoil/LoginAtom';
import LoginUser from '@/types/LoginUser';
import Page from '@/types/Page';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

interface Props {
  children: ReactNode;
}

const AppAuth = ({ children }: Props): JSX.Element => {
  const { login } = useLogin();
  const setLogin = useSetRecoilState(loginState);

  const router = useRouter();

  useEffect(() => {
    // 認証前の場合はサーバからログイン情報を取得
    if (!login.isAuthed) {
      // NOTE: サーバサイドが存在する場合はセッションから取得すること。今回はモックの為、localStorageで処理を行う
      const strageUser = getStrage();
      if (strageUser !== undefined) {
        const data: LoginUser = { ...login, isAuthed: true, isLogin: true, user: strageUser };
        setLogin(data);
        setStorage(strageUser);
        return;
      }
      const data: LoginUser = { ...login, isAuthed: true, isLogin: false };
      setLogin(data);
    }
  }, [login, router, setLogin]);

  // ログイン済の場合はロールチェック
  if (login.isLogin) {
    const findPage: Page | undefined = Object.values(PageMap).find(
      (page) =>
        router.asPath === page.href(login.user) ||
        (page.path !== undefined && router.asPath.startsWith(page.path)),
    );
    if (findPage === undefined) {
      return <>{children}</>;
    }
    const isAllow = findPage.allowRoleList.some((role) => role.id === login.user.role.id);
    if (!isAllow) {
      void router.push('/error');
      return <></>;
    }
  }
  return <>{children}</>;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <AppAuth>
        <Head>
          <title>Recording</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Alert />
        <Component {...pageProps} />
      </AppAuth>
    </RecoilRoot>
  );
};

export default MyApp;
