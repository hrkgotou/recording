import { FieldErrors, UseFormRegister } from 'react-hook-form';

import LoginInput from '@/types/LoginInput';

type Props = {
  register: UseFormRegister<LoginInput>;
  errors: FieldErrors<LoginInput>;
};
const NameInput = (props: Props): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="block text-xs font-medium text-gray-500">
        名前
      </label>
      <input
        type="text"
        id="name"
        maxLength={20}
        className="w-full flex-1 border-b border-dotted focus:border-b focus:border-solid focus:border-slate-500 focus:outline-none"
        {...props.register('name', {
          required: '名前は必須です。',
        })}
        placeholder="サンプル名"
      />
      {props.errors.name && (
        <span role="alert" className="block text-xs font-medium text-red-500">
          {props.errors.name.message}
        </span>
      )}
    </div>
  );
};

export default NameInput;
