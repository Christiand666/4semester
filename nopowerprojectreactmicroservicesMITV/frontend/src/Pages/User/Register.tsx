import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {
  Avatar,
  Box,
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



export default function Register() {
 
  const useStyles = makeStyles((theme: Theme) => ({
    app: {
      width: "100%",
      height: "100vh",
      backgroundImage: "url(bag1.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    },
    container: {
      paddingTop: 10,
      padding: theme.spacing(4),
    },
    content: {
      paddingTop: theme.spacing(3),
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
            <Link to="/">tilbage til startside</Link>
              <GrowList className={classes.content}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Register
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
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="fullname"
                  label="fullname"
                  name="fullname"
                  autoComplete="fullname"
                  autoFocus
                />
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
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label=" ReapeatPassword"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label=" phone"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                />
                   <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="street"
                  label=" street"
                  type="street"
                  id="street"
                  autoComplete="street"
                />
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="number"
                  label=" number"
                  type="number"
                  id="number"
                  autoComplete="number"
                />
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="zip"
                  label=" zip"
                  type="zip"
                  id="zip"
                  autoComplete="zip"
                />
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="city"
                  label=" city"
                  type="city"
                  id="city"
                  autoComplete="city"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={Register}
                >
                  Sign In
                </Button>
                <Box mt={4}>
                  <Copyright />
                </Box>
                </GrowList>
            </GlassCard>
          </Grow>
          </form>
        </Container>
      </div>
    )
}
