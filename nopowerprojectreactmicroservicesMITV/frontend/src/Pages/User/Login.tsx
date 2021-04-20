import React, { useState, useContext } from 'react'
import axios, { AxiosResponse } from 'axios';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Grow,
  Paper,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GlassCard } from "./GlassCard";
import { GrowList } from "./GrowList";
import { useCookies }  from 'react-cookie';



export default function Login() {
 
  const[email, setemail] = useState<string>("")
  const[password, setpassword] = useState<string>("")
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const history = useHistory();
  const login = () => {
    axios.post("http://localhost:3000/login", {
      email: email,
      password: password
    }).then((res :AxiosResponse) =>{
      setCookie('jwt', res.data.jwt);
      history.push("/profile");
      
    }).catch((res :AxiosResponse)=>{
			//fejl
		})
  }

  const useStyles = makeStyles((theme: Theme) => ({
    app: {
      width: "100%",
      height: "100vh",
      backgroundImage: "url(bag.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    },
    container: {
      paddingTop: 100,
      padding: theme.spacing(4),
    },
    content: {
      paddingTop: theme.spacing(6),
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  
    const classes = useStyles();
    return (
      <div className={classes.app}>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.container}>
          <form>
          <Grow in>
            <GlassCard>
            <Link to="/">Tilbage Til Startside</Link>
              <GrowList className={classes.content}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={e => setemail(e.target.value)}>
                  </TextField>
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => setpassword(e.target.value)}>
                </TextField>
              
                <FormControlLabel
                  style={{ width: "100%" }}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                 
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={login}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                  <Link to="/">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                  <Link to="/register">Dont have a acount click here</Link>
                  </Grid>
                </Grid>
  
                <Box mt={4}>
                  <Copyright />
                </Box>
                </GrowList>
            </GlassCard>
          </Grow>
          </form>
        </Container>
      </div>
    );
}
function res(res: any, AxiosResponse: any) {
  throw new Error('Function not implemented.');
}

