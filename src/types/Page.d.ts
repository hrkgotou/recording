import Role from './Role';

type Page = {
  href: (user: User) => string;
  text: string;
  path?: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  allowRoleList: Role[];
  allowFunc?: (user: User) => true;
};
export default Page;
