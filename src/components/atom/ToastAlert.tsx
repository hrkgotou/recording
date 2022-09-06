import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ToastAlert = (): JSX.Element => {
  return (
    <>
      <ToastContainer transition={Slide} limit={3} />
    </>
  );
};

export const showToastAlert = (message: string) => {
  toast.success(message, {
    position: 'top-center',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
  });
};

export default ToastAlert;
