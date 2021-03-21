import React, { useContext } from 'react';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AdminPage from './Pages/AdminPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import "./Main.css";
import { myContext } from './Pages/Context';
import Register from './Pages/Register';
import AppBar from '@material-ui/core/AppBar';



function App() {
  const ctx = useContext(myContext);
  
  return (
    <div>
      
    <BrowserRouter>
    <NavBar />
    <main>
      
      <Switch>
        <Route path='/' exact component={Homepage}></Route>  
       
        {
            ctx ? (
              <>
                {ctx.isAdmin ? <Route path='/admin' component={AdminPage}></Route> : null}
                <Route path='/profile' component={Profile}></Route>  
              </>
            ) : (
              <>
                <div style={{textAlign: "center"}}>
                <Route path='/login' component={Login}></Route>  
                </div> 
                <div style={{textAlign: "center"}}>       
                <Route path='/register' component={Register}></Route> 
                </div> 
              </>  
            )
        }
         
    </Switch>
    
    </main>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
