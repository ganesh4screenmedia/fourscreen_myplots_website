import { Button, FormControl, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { validateEmail } from '../../helpers';
import './copyRights.css';

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
  const [message, setMessage] = useState('');

  const onEmailChange = (event) => {
    if (isEmailInvalid) {
      setIsEmailInvalid(false);
    }

    setEmail(event?.target?.value);
  };

  const onMessageChange = (event) => {
    setMessage(event?.target?.value);
  };

  const sendFeedback = async (payload = {}) => {
    if (handleOnClose) handleOnClose();
    const rawResponse = await fetch(`${process.env.REACT_APP_BASE_URL}contactUs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const content = await rawResponse.json();

    console.log(content);
  };

  const onSubmit = () => {
    if (email !== '' && validateEmail(email)) {
      // make api call

      sendFeedback({ email, message });
    } else setIsEmailInvalid(true);
  };
  const themeColor = '#4F299D';

  return (
    <FormControl className="form-root-container" style={{ padding: 20, width: '100%' }}>
      <div className="close-div-container">
        <div />
        <span>Contact Us</span>
        <IconButton onClick={handleOnClose}>
          <CloseIcon color={themeColor} />
        </IconButton>
      </div>
      <div>
        <div style={{ margin: 10, marginTop: 10 }}>
          <TextField
            fullWidth
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
