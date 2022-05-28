import { useState } from 'react';
import { useContext } from 'react';
import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { app } from './firebase-config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';

import { useNavigate } from 'react-router-dom';
import { LoginContext } from './Context';

const theme = createTheme();

export default function SignIn() {

  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async () => {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  }

  let navigate = useNavigate();

const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
 /*   console.log({
      email: data.get('email'),
      password: data.get('password'),
      event
    }); */
    signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
    .then((response) => {
      navigate('/profile')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    })

};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(event) => {setLoginEmail(event.target.value);}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(event) => {setLoginPassword(event.target.value);}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              onClick={login}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}