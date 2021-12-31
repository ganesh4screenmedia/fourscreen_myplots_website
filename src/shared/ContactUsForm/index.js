import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { validateEmail } from '../../helpers';
import './contactUs.css';
import { toastType } from '../../Constants';
import useToast from '../../CustomHooks/Toast';
import { setLoader } from '../../Store/actions';

const styles = () => ({
  cssOutlinedInput: {
    height: 150,
    alignItems: 'flex-start',
  },
  textArea: {
    maxHeight: '130px',
    width: '100%',
  },
});

const Form = function ({ handleOnClose, classes }) {
  const [email, setEmail] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState('');
  const Toaster = useToast();
  const dispatch = useDispatch();

  const onEmailChange = (event) => {
    if (isEmailInvalid) {
      setIsEmailInvalid(false);
    }

    setEmail(event?.target?.value);
  };

  const onMessageChange = (event) => {
    if (isMessage) {
      setIsMessage(false);
    }
    setMessage(event?.target?.value);
  };

  const sendFeedback = (payload = {}) => {
    dispatch(setLoader(true));
    fetch(`${process.env.REACT_APP_BASE_URL}contactUs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (response.ok) {
          setMessage('');
          setEmail('');
          const options = {
            message: 'Your message has been sent',
            severity: toastType.success,
            onClose: () => {
              Toaster.hide();
            },
          };

          Toaster.show(options);
        } else {
          const error = await response.json();
          const options = {
            message: error?.message,
            severity: toastType.error,
            onClose: () => {
              Toaster.hide();
            },
          };

          Toaster.show(options);
        }
      })
      .catch((error) => {
        const options = {
          message: error?.message,
          severity: toastType.error,
          onClose: () => {
            Toaster.hide();
          },
        };

        Toaster.show(options);
      })
      .finally(() => {
        if (handleOnClose) handleOnClose();
        dispatch(setLoader(false));
      });
  };

  const onSubmit = () => {
    if (email === '' && !validateEmail(email)) {
      setIsEmailInvalid(true);
    }
    if (message === '') {
      setIsMessage(true);
    }
    if (email !== '' && validateEmail(email) && message !== '') {
      // make api call

      sendFeedback({ email, complaint: message });
    }
  };
  const themeColor = '#4F299D';

  return (
    <FormControl className="form-root-container" style={{ padding: 20, width: '100%' }}>
      <div className="close-div-container">
        <div />
        <span>Contact Us</span>
        <div />
      </div>
      <div>
        <div style={{ margin: 10, marginTop: 10 }}>
          <TextField
            fullWidth
            value={email}
            error={isEmailInvalid}
            label="E-mail"
            helperText={isEmailInvalid ? 'Invalid email' : ''}
            onChange={onEmailChange}
          />
        </div>
        <div style={{ margin: 10, height: '150px' }}>
          <TextField
            multiline
            fullWidth
            label="Type a message"
            value={message}
            error={isMessage}
            helperText={isMessage ? 'Please enter a message' : ''}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                input: classes.textArea,
              },
            }}
            onChange={onMessageChange}
          />
        </div>
      </div>
      <div className="submit-div-container">
        <Button
          style={{
            color: themeColor,
            borderColor: themeColor,
          }}
          variant="outlined"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </FormControl>
  );
};

export default withStyles(styles)(Form);
