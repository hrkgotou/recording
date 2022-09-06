import User from '@/types/User';

import TitleHeading from './TitleHeading';

type Props = {
  user: User;
};
const UserInfo = (props: Props): JSX.Element => {
  return <TitleHeading title={`${props.user.name}(${props.user.id})の勤怠状況`}></TitleHeading>;
};

export default UserInfo;
