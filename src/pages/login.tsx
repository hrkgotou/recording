/* eslint-disable @typescript-eslint/no-misused-promises */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import IdInput from '@/components/atom/IdInput';
import SubmitButton from '@/components/atom/SubmitButton';
import TitleHeading from '@/components/atom/TitleHeading';
import { showToastAlert } from '@/components/atom/ToastAlert';
import Layout from '@/components/layout/Layout';
import { useLogin } from '@/hooks/UseLogin';
import { findUser } from '@/lib/ApiMock';
import { setStorage } from '@/lib/StorageMock';
import { loginState } from '@/recoil/LoginAtom';
import LoginInput from '@/types/LoginInput';

const Login = (): JSX.Element => {
  const { login } = useLogin();
  const setLogin = useSetRecoilState(loginState);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInput>({
    defaultValues: { id: '', name: '' },
  });

  useEffect(() => {
    // セッションによりログイン済の場合はリダイレクト
    if (login.isLogin) {
      void router.push('/');
    }
  }, [login.isLogin, router]);

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    const user = findUser(data.id);
    if (user === undefined) {
      setError('id', {
        type: 'custom',
        message: 'IDが存在しません。',
      });
      return;
    }
    setLogin({ ...login, isLogin: true, user });
    setStorage(user);
    showToastAlert('ログインに成功しました。');
    void router.push('/');
  };

  return (
    <Layout>
      <div className="flex h-full flex-col justify-evenly md:items-center">
        <div className="box-content flex flex-col gap-6 rounded-lg bg-white p-8 shadow-lg">
          <TitleHeading title="Login" />
          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <IdInput register={register} errors={errors} />
            </div>
            <SubmitButton text="ログイン" />
            <div className="flex text-center text-sm">
              <Link href="/signup">
                <a className="flex-1 ">登録</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
