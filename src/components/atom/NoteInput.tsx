import { FieldErrors, UseFormRegister } from 'react-hook-form';

import DayRowInput from '@/types/DayRowInput';

type Props = {
  register: UseFormRegister<DayRowInput>;
  errors: FieldErrors<DayRowInput>;
};
const NoteInput = (props: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label htmlFor="id" className="block text-xs font-medium text-gray-500">
        備考
      </label>
      <input
        type="text"
        id="id"
        maxLength={200}
        className="w-full flex-1 border-b border-dotted py-1 focus:border-b focus:border-solid focus:border-slate-500 focus:outline-none"
        {...props.register('note')}
        placeholder="example note"
      />
      {props.errors.note && (
        <span role="alert" className="block text-xs font-medium text-red-500">
          {props.errors.note.message}
        </span>
      )}
    </div>
  );
};

export default NoteInput;
