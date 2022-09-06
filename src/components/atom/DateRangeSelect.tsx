/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useLogin } from '@/hooks/UseLogin';
import { findTimeRecordByIdAndDate, insertTimeRecord } from '@/lib/ApiMock';
import { range } from '@/lib/ArrayUtils';
import DayRowInput from '@/types/DayRowInput';
import TimeRecord from '@/types/TimeRecord';
import User from '@/types/User';

import NoteInput from './NoteInput';
import SubmitButton from './SubmitButton';
import { showToastAlert } from './ToastAlert';

type Props = {
  user: User;
  currentDate: Date;
  handleSubmitCallback?: () => void;
};
const DateRangeSelect = (props: Props): JSX.Element => {
  const { login } = useLogin();
  const [record, setRecord] = useState<TimeRecord | undefined>(undefined);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<DayRowInput>({
    defaultValues: { startTime: '09:00', endTime: '18:00', note: '' },
  });

  const existsRecord = record !== undefined;

  const onSubmit: SubmitHandler<DayRowInput> = (data) => {
    const record = {
      userId: props.user.id,
      date: props.currentDate,
      startTime: data.startTime,
      endTime: data.endTime,
      note: data.note,
    };
    insertTimeRecord(record);
    const findRecord = findTimeRecordByIdAndDate(login.user.id, props.currentDate);
    setRecord(findRecord);
    showToastAlert(`${existsRecord ? '更新' : '登録'}が完了しました。`);

    if (props.handleSubmitCallback !== undefined) {
      props.handleSubmitCallback();
    }
  };

  const timeList = range(0, 47).map((num) => {
    const isHalfTime = !Number.isInteger(num / 2);
    const floorNumber = Math.floor(num / 2);
    const padZero = (num: number) => String(num).padStart(2, '0');
    return `${padZero(floorNumber)}:${isHalfTime ? '30' : '00'}`;
  });

  const fromToMessage = '業務開始には業務終了よりも前の時間を入力してください。';
  const handleFromToValidate = (isStartTime: boolean) => {
    const isError = getValues('startTime') >= getValues('endTime');
    if (isError) {
      if (!isStartTime) {
        setError('startTime', {
          type: 'custom',
          message: fromToMessage,
        });
      }
      return isStartTime ? fromToMessage : true;
    }
    clearErrors(['startTime', 'endTime']);
  };

  useEffect(() => {
    const findRecord = findTimeRecordByIdAndDate(login.user.id, props.currentDate);
    setRecord(findRecord);
    if (findRecord !== undefined) {
      setValue('startTime', findRecord.startTime);
      setValue('endTime', findRecord.endTime);
      setValue('note', findRecord.note);
    }
  }, [login.user.id, props.currentDate, setValue]);

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col gap-2">
        <div className="flex gap-3">
          <div className="flex-1">
            <label htmlFor="start-time" className="block text-xs font-medium text-gray-500">
              業務開始
            </label>
            <select
              id="start-time"
              className="w-full border-b border-dotted focus:border-solid focus:border-slate-500 focus:outline-none"
              {...register('startTime', {
                validate: {
                  fromToValidate: () => handleFromToValidate(true),
                },
              })}
            >
              {timeList.map((v, i) => (
                <option key={i}>{v}</option>
              ))}
            </select>
            {errors.startTime && (
              <span role="alert" className="block text-xs font-medium text-red-500">
                {errors.startTime.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="end-time" className="block text-xs font-medium text-gray-500">
              業務終了
            </label>
            <select
              id="end-time"
              className="w-full border-b border-dotted focus:border-solid focus:border-slate-500 focus:outline-none"
              {...register('endTime', {
                validate: {
                  fromToValidate: () => handleFromToValidate(false),
                },
              })}
            >
              {timeList.map((v, i) => (
                <option key={i} value={v}>
                  {v}
                </option>
              ))}
            </select>
            {errors.endTime && (
              <span role="alert" className="block text-xs font-medium text-red-500">
                {errors.endTime.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <NoteInput register={register} errors={errors} />
        </div>
      </div>
      <SubmitButton text={existsRecord ? '更新' : '登録'} />
    </form>
  );
};

export default DateRangeSelect;
