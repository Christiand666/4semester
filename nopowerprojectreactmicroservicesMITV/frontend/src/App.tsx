import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AdminPage from './Pages/AdminPage';
import Login from './Pages/User/Login';
import Profile from './Pages/User/Profile';
import Register from './Pages/User/Register';


function App() {
	
	
	return (
		
		<div className="app">
		<Router>
			<Switch>
				<Route path='/' exact component={Homepage}></Route>  
			
				<Route path='/admin' component={AdminPage}></Route> 
				
				<Route path='/login' component={Login}></Route>
				
				<Route path='/register' component={Register}></Route> 
			
			</Switch>
		</Router>
		</div>
		
	);
}

export default App;
