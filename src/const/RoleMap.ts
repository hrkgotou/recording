import Role from '@/types/Role';

const RoleMap: { [id: string]: Role } = {
  NOT_LOGIN: { id: '', name: '' },
  ADMIN: { id: 'admin', name: '管理者ユーザ' },
  CLIENT: { id: 'client', name: '一般ユーザ' },
};
export default RoleMap;
