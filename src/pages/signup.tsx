/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

import IdInput from '@/components/atom/IdInput';
import NameInput from '@/components/atom/NameInput';
import SubmitButton from '@/components/atom/SubmitButton';
import TitleHeading from '@/components/atom/TitleHeading';
import { showToastAlert } from '@/components/atom/ToastAlert';
import Layout from '@/components/layout/Layout';
import RoleMap from '@/const/RoleMap';
import { findUser, insertUser } from '@/lib/ApiMock';
import LoginInput from '@/types/LoginInput';

const Signup = (): JSX.Element => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInput>({
    defaultValues: { id: '', name: '' },
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    const user = findUser(data.id);
    if (user !== undefined) {
      setError('id', {
        type: 'custom',
        message: '既に登録されているIDです。',
      });
      return;
    }
    insertUser({ ...data, role: RoleMap.CLIENT });
    showToastAlert('ユーザ登録に成功しました。');
    void router.push('/login');
  };

  return (
    <Layout>
      <div className="flex h-full flex-col justify-evenly md:items-center">
        <div className="box-content flex flex-col gap-6 rounded-lg bg-white p-8 shadow-lg">
          <TitleHeading title="Signup" />
          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <IdInput register={register} errors={errors} />
              <NameInput register={register} errors={errors} />
            </div>
            <SubmitButton text="登録" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
