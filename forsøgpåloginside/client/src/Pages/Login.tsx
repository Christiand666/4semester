import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import googleImage from '../assets/googleImage.png';
import githubImage from '../assets/githubImage.png';
import twitterImage from '../assets/twitterImage.png';


export default function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
}

const githubLogin = () => {
    window.open("https://o-auth-video-backend.herokuapp.com/auth/github", "_self");
}

const twitterLogin = () => {
    window.location.href = "https://o-auth-video-backend.herokuapp.com/auth/twitter"
}

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
    media: {
      maxWidth: 40,
      height: 30
     
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
      
      <div className={classes.section3}>
      <h3>Login with other mediea</h3>
                <div className={classes.section3} onClick={googleLogin}>
                <Button variant="contained" color="primary" style={{maxWidth: '1000px', maxHeight: '20px', minWidth: '40px', minHeight: '30px'}}> 
                    <img className={classes.media} src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                    </Button>
                </div>

                <div className={classes.section3} onClick={githubLogin}>
                <Button variant="contained" color="primary" style={{maxWidth: '1000px', maxHeight: '20px', minWidth: '40px', minHeight: '30px'}}> 
                    <img className={classes.media} src={githubImage} alt="Github Icon" />
                    <p>Login With Github</p>
                    </Button>
                </div>
                
                <div className={classes.section3} onClick={twitterLogin}>
                <Button variant="contained" color="primary" style={{maxWidth: '1000px', maxHeight: '20px', minWidth: '40px', minHeight: '30px'}}> 
                <img className={classes.media} src={twitterImage} alt="Twitter Icon" /> 
                    <p>Login With Twitter</p>
                    </Button>
                </div>
                
      </div>
    </div>
    </form>
    </div>
    
  )
}
