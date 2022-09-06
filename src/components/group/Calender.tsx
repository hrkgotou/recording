import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { endOfMonth, isSameMonth, isSameYear, subMonths } from 'date-fns';
import { useState } from 'react';

import { range } from '@/lib/ArrayUtils';
import { formatYmdJp, formatYmJp } from '@/lib/DateUtils';
import TimeRecord from '@/types/TimeRecord';
import User from '@/types/User';

import DateRangeSelect from '../atom/DateRangeSelect';
import DayRow from '../atom/DayRow';
import Modal from '../atom/Modal';
import TitleHeading from '../atom/TitleHeading';

type Props = {
  user: User;
  timeRecordList: TimeRecord[];
  handleReFetch: () => void;
};
const Calendar = (props: Props): JSX.Element => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [isShow, setShow] = useState(false);
  const [editDate, setEditDate] = useState<Date>(new Date());

  const targetRecordList = props.timeRecordList?.filter(
    (v) => isSameYear(currentDate, v.date) && isSameMonth(currentDate, v.date),
  );
  const lastDay = endOfMonth(currentDate).getDate();
  const dayList = range(1, lastDay).map((day) => {
    const timeRecord = targetRecordList.find((record) => record.date.getDate() === day);
    return { timeRecord, day };
  });

  const handleSubMonths = (amount: number) => {
    setCurrentDate(subMonths(currentDate, amount));
  };
  const handleTodayMonths = () => {
    setCurrentDate(new Date());
  };
  const handleEdit = (editDate: Date) => {
    setEditDate(editDate);
    setShow(true);
  };
  const handleSubmitCallback = () => {
    props.handleReFetch();
    setShow(false);
  };
  return (
    <>
      <Modal isShow={isShow} setShow={setShow}>
        <TitleHeading title={`${formatYmdJp(editDate)}の勤怠`} />
        <DateRangeSelect
          user={props.user}
          currentDate={editDate}
          handleSubmitCallback={handleSubmitCallback}
        />
      </Modal>
      <div className="flex select-none flex-col gap-2">
        <div className="flex gap-2">
          <ChevronLeftIcon
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-slate-500 text-white"
            onClick={() => handleSubMonths(1)}
          />
          <div className="w-24 text-center font-bold">{formatYmJp(currentDate)}</div>
          <ChevronRightIcon
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-slate-500 text-white"
            onClick={() => handleSubMonths(-1)}
          />
          <button
            type="button"
            className="flex h-6 items-center justify-center rounded bg-slate-500 px-2 text-white"
            onClick={() => handleTodayMonths()}
          >
            当月
          </button>
        </div>
        <div className="flex flex-col">
          {dayList.map((v) => (
            <DayRow
              currentDate={currentDate}
              day={v.day}
              timeRecord={v.timeRecord}
              key={v.day}
              handleEdit={(date: Date) => handleEdit(date)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
