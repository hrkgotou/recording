import { useEffect, useState } from 'react';

import { formatHmsJp, formatYmdJp } from '@/lib/DateUtils';

type Props = {
  currentDate: Date;
};
const Clock = (props: Props): JSX.Element => {
  const [currentDate, setCurrentDate] = useState(props.currentDate);

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-xl bg-slate-800 py-2  text-white">
        <div className="text-sm">{formatYmdJp(currentDate)}</div>
        <div className="text-4xl">{formatHmsJp(currentDate)}</div>
      </div>
    </div>
  );
};

export default Clock;
