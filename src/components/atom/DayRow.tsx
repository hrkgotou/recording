import { PencilIcon } from '@heroicons/react/solid';
import { isSameDay, setDate } from 'date-fns';

import { formatDayJp } from '@/lib/DateUtils';
import TimeRecord from '@/types/TimeRecord';

type Props = {
  currentDate: Date;
  timeRecord?: TimeRecord;
  day: number;
  handleEdit: (date: Date) => void;
};
const Calendar = (props: Props): JSX.Element => {
  const showDay = setDate(new Date(props.currentDate), props.day);
  const addClassName = isSameDay(showDay, new Date()) ? ' bg-slate-200' : '';

  return (
    <div className={`flex border-b${addClassName}`} key={props.day}>
      <div className="basis-8">
        <button
          type="button"
          title="edit"
          className="flex h-6 w-6 items-center justify-center rounded bg-slate-500 text-white"
          onClick={() => props.handleEdit(showDay)}
        >
          <PencilIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="basis-20">{formatDayJp(showDay)}</div>
      <div className="flex basis-28">
        <span>
          {props.timeRecord?.startTime}
          {props.timeRecord?.startTime && ' - '}
          {props.timeRecord?.endTime}
        </span>
      </div>
      <div className="flex-1 break-all">{props.timeRecord?.note}</div>
    </div>
  );
};

export default Calendar;
