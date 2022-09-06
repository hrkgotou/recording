import { HomeIcon, LogoutIcon, UserIcon, UsersIcon } from '@heroicons/react/solid';

import Page from '@/types/Page';
import User from '@/types/User';

import RoleMap from './RoleMap';

const PageMap: { [id: string]: Page } = {
  HOME: {
    text: 'ホーム',
    href: () => '/',
    icon: HomeIcon,
    allowRoleList: [RoleMap.ADMIN, RoleMap.CLIENT],
  },
  MY_PAGE: {
    text: 'マイページ',
    href: (user: User) => `/user/${user.id}`,
    path: `/user/`,
    icon: UserIcon,
    allowRoleList: [RoleMap.ADMIN, RoleMap.CLIENT],
  },
  USERS: {
    text: 'ユーザ一覧',
    href: () => `/users`,
    icon: UsersIcon,
    allowRoleList: [RoleMap.ADMIN],
  },
  LOGOUT: {
    text: 'ログアウト',
    href: () => '/logout',
    icon: LogoutIcon,
    allowRoleList: [RoleMap.ADMIN, RoleMap.CLIENT],
  },
};
export default PageMap;
