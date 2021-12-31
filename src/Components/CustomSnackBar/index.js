import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const AlertMessage = React.forwardRef((props, ref) => (
  <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />
));

export const SnackBar = function () {
  const options = useSelector((state) => state.common.snackBarOptions);

  return (
    <Snackbar
      open={Boolean(options?.message) || false}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={() => options?.onClose() || null}
    >
      <AlertMessage
        severity={options?.severity || 'error'}
        sx={{ width: '100%' }}
        onClose={() => options?.onClose()}
      >
        {options?.message || ''}
      </AlertMessage>
    </Snackbar>
  );
};
