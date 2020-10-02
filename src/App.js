import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
       <Router>
         <Switch>
         <Route exact path="/">
            <Home />
          </Route>
         <Route path="/home">
            <Home/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
