import Link from 'next/link';
import { useEffect, useState } from 'react';

import TitleHeading from '@/components/atom/TitleHeading';
import LoginLayout from '@/components/layout/LoginLayout';
import { useLogin } from '@/hooks/UseLogin';
import { findAllUser } from '@/lib/ApiMock';
import User from '@/types/User';

const Users = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const { login } = useLogin();

  useEffect(() => {
    if (!login.isLogin) return;
    const fetchUsers = findAllUser();
    setUsers(fetchUsers);
  }, [login.isLogin]);

  return (
    <LoginLayout>
      <div className="flex flex-col gap-3">
        <TitleHeading title="ユーザ一覧" />
        {users.length > 0 && (
          <div className="flex flex-col gap-2 text-base">
            {users.map((v) => (
              <div key={v.id} className="flex border-b">
                <Link href={`/user/${v.id}`}>
                  <a className="flex-1">
                    {v.name}({v.id})
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </LoginLayout>
  );
};

export default Users;
