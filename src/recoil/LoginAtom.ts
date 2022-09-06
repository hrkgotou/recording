import { atom } from 'recoil';

import RoleMap from '@/const/RoleMap';
import LoginUser from '@/types/LoginUser';

export const loginDefaultValue: LoginUser = {
  isAuthed: false,
  isLogin: false,
  user: { id: '', name: '', role: RoleMap.NOT_LOGIN },
};
export const loginState = atom<LoginUser>({
  key: 'login',
  default: loginDefaultValue,
});
