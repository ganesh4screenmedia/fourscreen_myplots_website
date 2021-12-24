import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { validateEmail } from '../../helpers';

const Form = function () {
  const [email, setEmail] = useState('');
  const [/* message, */ setMessage] = useState('');

  const onEmailChange = (event) => {
    setEmail(event?.tartget?.value);
  };

  const onMessageChange = (event) => {
    setMessage(event?.tartget?.value);
  };

  const onSubmit = () => {
    if (email !== '' && validateEmail(email)) {
      // make api call
    }
  };

  return (
    <FormControl style={{ padding: 20, width: '100%' }}>
      <div style={{ position: 'absolute', right: 5, top: 5, padding: 5 }}>close</div>
      <div style={{ margin: 10, marginTop: 30 }}>
        <TextField label="E-mail" style={{ width: '90%' }} onChange={onEmailChange} />
      </div>
      <div style={{ margin: 10 }}>
        <TextField
          multiline
          label="Type a message"
          style={{ width: '90%', height: '300px' }}
          onChange={onMessageChange}
        />
      </div>
      <div style={{ margin: 10 }}>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </FormControl>
  );
};

export default Form;
