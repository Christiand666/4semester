import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




export default function Register() {
  const [name, setname] = useState<string>("")
  const [lastname, setlastname] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const[RepeatPassword, setRepeatPassword]=useState<string>("")

  

  const register = () => {
    axios.post("http://localhost:4000/register", {
      name,
      lastname,
      username,
      password,
      RepeatPassword
    }, {
      withCredentials: true
    }).then((res : AxiosResponse) => {
      if (password !==RepeatPassword){
        alert("passwords dont match")
      }else
      if (res.data === "success") {
       window.location.href = "/login"
     }
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
    
    <form className={classes.root} noValidate autoComplete="on" >
      <div>
        <h1>Register</h1>
        <div>
        <TextField label="Name" onChange={e => setname(e.target.value)}> </TextField>
        </div>
        <div>
        <TextField label="LastName" onChange={e => setlastname(e.target.value)}> </TextField>
        </div>
        <div>
        <TextField label="UserName" onChange={e => setUsername(e.target.value)}> </TextField>
        </div>
        <div>
        <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" onChange={e => setPassword(e.target.value)}> </TextField>
        </div>
        <div>
        <TextField id="standard-password-input" label=" RepeatPassword" type="password" onChange={e => setRepeatPassword(e.target.value)} > </TextField>
        </div>
      
     
        <div className={classes.section3}>
        <Button variant="contained" color="primary" style={{maxWidth: '100px', maxHeight: '20px', minWidth: '40px', minHeight: '30px'}} 
        onClick={register}>Register</Button>
        </div>
      </div>
    </form>
    
  )
}
