type Props = {
  text?: string;
};

const SubmitButton = (props: Props): JSX.Element => {
  return (
    <input
      className="cursor-pointer rounded bg-slate-500 p-1 text-xl font-bold text-white"
      type="submit"
      value={props.text}
    />
  );
};

export default SubmitButton;
