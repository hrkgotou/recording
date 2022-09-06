import Link from 'next/link';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import Layout from '@/components/layout/Layout';
import { removeStorage } from '@/lib/StorageMock';
import { loginDefaultValue, loginState } from '@/recoil/LoginAtom';

const Error = (): JSX.Element => {
  const setLogin = useSetRecoilState(loginState);

  useEffect(() => {
    // NOTE: エラー画面遷移時はエラー内容にかかわらず必ずログイン情報を消去する
    setLogin(loginDefaultValue);
    removeStorage();
  }, [setLogin]);

  return (
    <Layout>
      <div className="flex h-full w-full items-center justify-center ">
        <div className="mr-3 border-r border-dotted border-slate-500 pr-3">Error.</div>
        <div>
          {'back to '}
          <Link href="/login">
            <a className="text-slate-500" data-mdb-ripple="true" data-mdb-ripple-color="dark">
              Login page.
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
