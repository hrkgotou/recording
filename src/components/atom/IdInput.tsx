import { FieldErrors, UseFormRegister } from 'react-hook-form';

import LoginInput from '@/types/LoginInput';

type Props = {
  register: UseFormRegister<LoginInput>;
  errors: FieldErrors<LoginInput>;
};
const IdInput = (props: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label htmlFor="id" className="block text-xs font-medium text-gray-500">
        ID
      </label>
      <input
        type="text"
        id="id"
        maxLength={20}
        className="w-full flex-1 border-b border-dotted focus:border-b focus:border-solid focus:border-slate-500 focus:outline-none"
        {...props.register('id', {
          required: 'IDは必須です。',
          pattern: {
            value: /^[0-9a-zA-Z]+/,
            message: 'IDは英数字のみで入力してください。',
          },
        })}
        placeholder="exampleid"
      />
      {props.errors.id && (
        <span role="alert" className="block text-xs font-medium text-red-500">
          {props.errors.id.message}
        </span>
      )}
    </div>
  );
};

export default IdInput;
