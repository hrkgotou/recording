import User from '@/types/User';

const STRORAGE_KEY = 'RECORDING_KEY';

export const setStorage = (user: User) => {
  localStorage.setItem(STRORAGE_KEY, JSON.stringify(user));
};

export const getStrage = (): User | undefined => {
  const data = localStorage.getItem(STRORAGE_KEY);
  if (data === null || data === undefined || data === 'undefined') {
    return undefined;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const parseData: User = JSON.parse(data || '{}');
  return parseData || undefined;
};

export const removeStorage = () => {
  localStorage.removeItem(STRORAGE_KEY);
};
