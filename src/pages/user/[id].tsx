import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import UserInfo from '@/components/atom/UserInfo';
import Calender from '@/components/group/Calender';
import LoginLayout from '@/components/layout/LoginLayout';
import { useLogin } from '@/hooks/UseLogin';
import { filterTimeRecordById, findUser } from '@/lib/ApiMock';
import TimeRecord from '@/types/TimeRecord';
import User from '@/types/User';

const User = (): JSX.Element => {
  const { login, isAdmin } = useLogin();

  const [user, setUser] = useState<User | undefined>();
  const [timeRecordList, setTimeRecord] = useState<TimeRecord[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id === undefined || !login.isLogin) return;
    if (typeof id !== 'string' || id.length === 0) {
      void router.push('/error');
      return;
    }
    // NOTE: ADMIN権限以外の場合は自分以外のユーザページを参照出来ない
    if (!isAdmin && id !== login.user.id) {
      void router.push('/error');
      return;
    }
    const fetchUser = findUser(id);
    if (fetchUser === undefined) {
      void router.push('/error');
      return;
    }
    setUser(fetchUser);
    const filterTimeRecordList = filterTimeRecordById(fetchUser.id);
    setTimeRecord(filterTimeRecordList);
  }, [id, isAdmin, login.isLogin, login.user.id, router]);

  const handleReFetch = () => {
    if (user === undefined) return;
    const filterTimeRecordList = filterTimeRecordById(user.id);
    setTimeRecord(filterTimeRecordList);
  };

  return (
    <LoginLayout>
      {user !== undefined && (
        <>
          <div className="flex h-full flex-col gap-4">
            <UserInfo user={user} />
            <Calender user={user} timeRecordList={timeRecordList} handleReFetch={handleReFetch} />
          </div>
        </>
      )}
    </LoginLayout>
  );
};

export default User;
