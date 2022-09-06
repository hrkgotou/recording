import Link from 'next/link';
import { useRouter } from 'next/router';

import PageMap from '@/const/PageMap';
import { useLogin } from '@/hooks/UseLogin';
import Page from '@/types/Page';

const SideBar = (): JSX.Element => {
  const { login } = useLogin();
  const router = useRouter();

  const pageList = Object.values(PageMap).filter((page: Page) =>
    page.allowRoleList.some((role) => role.id === login.user.role.id),
  );

  const selectedClass = (href: string, path?: string) =>
    router.asPath === href || (path !== undefined && router.asPath.startsWith(path))
      ? 'hover:bg-gray-200 bg-white text-gray-900'
      : 'hover:bg-slate-600 text-slate-100';

  return (
    <div className="fixed bottom-0 h-12 w-full bg-slate-700 px-2 pb-1 text-center md:relative md:h-full md:w-1/6 md:pt-4">
      <div className="relative flex justify-between overflow-x-auto md:block">
        {pageList.map((v, i) => (
          <div className="relative w-1/4 md:w-full" key={i}>
            <Link href={v.href(login.user)}>
              <a
                className={`flex flex-col items-center whitespace-nowrap p-2 transition duration-100 ease-in-out md:flex-row ${selectedClass(
                  v.href(login.user.id),
                  v.path,
                )}`}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <div className="h-5 w-5 md:mr-2">
                  <v.icon />
                </div>
                <div className="text-xs md:text-base">{v.text}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
