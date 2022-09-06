import { selector } from 'recoil';

import { loginState } from '@/recoil/LoginAtom';
import LoginUser from '@/types/LoginUser';

export const loginSelector = selector<LoginUser>({
  key: 'getLoginSelector',
  get: ({ get }) => {
    return get(loginState);
  },
});
