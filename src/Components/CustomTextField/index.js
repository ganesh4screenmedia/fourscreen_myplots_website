import { TextField, withStyles } from '@mui/material';

export const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#4F299D',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#4F299D',
      },
      '&:hover fieldset': {
        borderColor: '#4F299D',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4F299D',
      },
    },
  },
})(TextField);
