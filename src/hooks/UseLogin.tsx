import { useRecoilValue } from 'recoil';

import RoleMap from '@/const/RoleMap';
import { loginSelector } from '@/recoil/LoginSelector';

export const useLogin = () => {
  const login = useRecoilValue(loginSelector);
  const isAdmin = login.user.role.id === RoleMap.ADMIN.id;
  return {
    login,
    isAdmin,
  };
};
