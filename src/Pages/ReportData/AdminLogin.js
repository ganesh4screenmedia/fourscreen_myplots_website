import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../api/AdminLoginAPiCall';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import { setTokenForPrivate } from '../../api';
import { setLoader } from '../../Store/actions';
import useToast from '../../CustomHooks/Toast';
import { toastType } from '../../Constants';

const theme = createTheme({
  // palette: {
  //   background: {
  //     default: '#FFF',
  //   },
  // },
});

const AdminLogin = function () {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Toaster = useToast();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const requestBody = { email: data.get('email'), password: data.get('password') };

    dispatch(setLoader(true));
    adminLogin(requestBody)
      .then((res) => {
        console.log('res', res);
        const options = {
          message: res?.message,
          severity: toastType.success,
          onClose: () => {
            Toaster.hide();
          },
        };

        Toaster.show(options);
        setTokenForPrivate(res?.data?.token);
        localStorage.setItem('token', res?.data?.token);
        navigate('/ReportData');
      })
      .catch((err) => {
        console.log('err', err);
        const options = {
          message: err?.message,
          severity: toastType.error,
          onClose: () => {
            Toaster.hide();
          },
        };

        Toaster.show(options);
      })
      .finally(() => {
        dispatch(setLoader(false));
      });
  };

  return (
    <div>
      <div
        style={{
          height,
          backgroundColor: '#4F299D',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              height: '330px',
              backgroundColor: 'white',
              width: width < 600 ? '300px' : '600px',
            }}
          >
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography component="h1" variant="h5">
                    Admin Login
                  </Typography>
                  <Box noValidate component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                      required
                      fullWidth
                      autoFocus
                      margin="normal"
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                    <TextField
                      required
                      fullWidth
                      margin="normal"
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 5 }}>
                      Log In
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
