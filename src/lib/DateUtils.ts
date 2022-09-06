import { format } from 'date-fns';
import ja from 'date-fns/locale/ja';

export const formatYmd = (date?: Date, delimiter?: string): string => {
  if (date === undefined) return '';
  const safeDelimiter = delimiter ?? '-';
  return format(date, `yyyy${safeDelimiter}MM${safeDelimiter}dd`, { locale: ja });
};

export const formatYmdJp = (date?: Date): string => {
  if (date === undefined) return '';
  return format(date, 'yyyy年MM月dd日', { locale: ja });
};

export const formatYmJp = (date?: Date): string => {
  if (date === undefined) return '';
  return format(date, 'yyyy年MM月', { locale: ja });
};

export const formatDayJp = (date?: Date): string => {
  if (date === undefined) return '';
  return format(date, 'd日(E)', { locale: ja });
};

export const formatHmJp = (date?: Date): string => {
  if (date === undefined) return '';
  return format(date, 'HH:mm', { locale: ja });
};

export const formatHmsJp = (date?: Date): string => {
  if (date === undefined) return '';
  return format(date, 'HH:mm:ss', { locale: ja });
};
