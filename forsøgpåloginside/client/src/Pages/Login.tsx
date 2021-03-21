import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import Button from '@material-ui/core/Button';
import { sizing } from '@material-ui/system';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';


export default function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const login = () => {
    axios.post("http://localhost:4000/login", {
      username,
      password
    }, {
      withCredentials: true
    }).then((res : AxiosResponse) => {
      if (res.data === "succes") {
        window.location.href = "/";
     }
    }, () => {
      console.log("Failure");
    })
  }

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        alignItems: "center",
        
        
      },
    },
    section3: {
      margin: theme.spacing(2, 1, 1),
    },
   
  
  }),
);
const classes = useStyles();
  return (
    <div>
    <form className={classes.root} noValidate autoComplete="on" >
      
    <div>
      <h1>Login</h1>
      
      <h5>Dont have a acount click here<Link to="/register">Register</Link></h5>
      <div>
      <TextField label="UserName" onChange={e => setUsername(e.target.value)}> </TextField>
      </div>
      <div>
      <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)}> </TextField>
      </div>
      <div className={classes.section3}>
      <Button variant="contained" color="primary" style={{maxWidth: '100px', maxHeight: '20px', minWidth: '40px', minHeight: '30px'}} 
      onClick={login}>Login</Button>
      </div>
    </div>
    </form>
    </div>
    
  )
}
