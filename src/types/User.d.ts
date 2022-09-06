import Role from './Role';

type User = {
  id: string;
  name: string;
  role: Role;
  message?: string;
  avatorUrl?: string;
};
export default User;
