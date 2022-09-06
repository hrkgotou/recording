import { useState } from 'react';

import Clock from '@/components/atom/Clock';
import DateRangeSelect from '@/components/atom/DateRangeSelect';
import TitleHeading from '@/components/atom/TitleHeading';
import LoginLayout from '@/components/layout/LoginLayout';
import { useLogin } from '@/hooks/UseLogin';
import { formatYmdJp } from '@/lib/DateUtils';

const Index = (): JSX.Element => {
  const { login } = useLogin();
  const [currentDate] = useState<Date>(new Date());

  return (
    <LoginLayout>
      <div className="flex w-full flex-col gap-6">
        <Clock currentDate={currentDate} />
        <TitleHeading title={`${formatYmdJp(currentDate)}の勤怠`} />
        <DateRangeSelect user={login.user} currentDate={currentDate} />
      </div>
    </LoginLayout>
  );
};

export default Index;
