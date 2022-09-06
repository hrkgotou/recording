import { isSameDay } from 'date-fns';

import RoleMap from '@/const/RoleMap';
import TimeRecord from '@/types/TimeRecord';
import User from '@/types/User';

type DataType = {
  users: User[];
  timeRecords: TimeRecord[];
};
const data: DataType = {
  users: [
    { id: 'admin', name: 'Adminユーザ', role: RoleMap.ADMIN },
    { id: 'test', name: 'テストユーザ', role: RoleMap.CLIENT },
    { id: 'example', name: 'サンプルユーザ', role: RoleMap.CLIENT },
  ],
  timeRecords: [
    {
      userId: 'test',
      date: new Date('2022-8-1'),
      startTime: '09:00',
      endTime: '17:00',
      note: '私用のため早退',
    },
    {
      userId: 'test',
      date: new Date('2022-8-4'),
      startTime: '09:00',
      endTime: '18:00',
    },
    {
      userId: 'test',
      date: new Date('2022-8-5'),
      startTime: '09:00',
      endTime: '18:00',
    },
  ],
};

export const findUser = (id: string) => {
  return data.users.find((v: User) => v.id === id);
};

export const findAllUser = () => {
  return data.users;
};

export const insertUser = (user: User): void => {
  data.users.push(user);
};

export const filterTimeRecordById = (id: string) => {
  return data.timeRecords.filter((v: TimeRecord) => v.userId === id);
};

export const findTimeRecordByIdAndDate = (id: string, date: Date) => {
  return data.timeRecords.find((v: TimeRecord) => v.userId === id && isSameDay(v.date, date));
};

export const insertTimeRecord = (record: TimeRecord): void => {
  const findRecord = findTimeRecordByIdAndDate(record.userId, record.date);
  if (findRecord) {
    findRecord.startTime = record.startTime;
    findRecord.endTime = record.endTime;
  } else {
    data.timeRecords.push(record);
  }
};
