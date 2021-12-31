import { useDispatch } from 'react-redux';
import { setSnackBarOptions } from '../../Store/actions';

const useToast = () => {
  const dispatch = useDispatch();

  const show = (options) => {
    dispatch(setSnackBarOptions(options));
  };

  const hide = () => {
    dispatch(setSnackBarOptions({}));
  };

  return { show, hide };
};

export default useToast;
