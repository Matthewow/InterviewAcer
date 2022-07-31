import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect} from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © HKUCS MSC2021 G032 CodeAcer'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignInSide({token, setToken, setPersonalInfo}) {
  const [errorAlert, setErrorAlert] = useState("none")
  const [alertContext, setAlertContext] = useState("Failed to log in, please try again...")

  let navigate = useNavigate();
  useEffect(() => {
    if (token !== "")
      navigate('/')
  }, [token]);



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);


    const login_info = {
      "email": data.get('email'),
      "password": data.get('password')
    }

    axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/login_register/login`, login_info)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          if (res.data.code === '00'){
              setToken(res.data.token);
              // setPersonalInfo(res.data.data);
              navigate("/#home", { replace: true });
          }
          else{
              setErrorAlert("block")
              setAlertContext(res.data.description)
          }
        }
      })
      
    };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
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
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Alert
                severity="error"
                sx = { errorAlert === "none" ? {display : "none"} : {display : ""}}
              > {"Error: " + alertContext}
              </Alert>

              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                
                <Grid item>
                  <Link href="register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}