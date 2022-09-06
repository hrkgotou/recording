import { XIcon } from '@heroicons/react/solid';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type Props = {
  isShow: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
const Modal = (props: Props): JSX.Element => {
  const handleClose = () => {
    props.setShow(false);
  };
  return (
    <>
      {props.isShow && (
        <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/50">
          <div className="flex w-full flex-col rounded bg-white shadow md:w-1/2">
            <div className="flex justify-end text-slate-600">
              <XIcon className="m-1 h-6 w-6 cursor-pointer" onClick={handleClose} />
            </div>
            <div className="h-full w-full p-4">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
