import React, { createContext, useState } from 'react';
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
import CreateNew from './components/Login/CreateNew/CreateNew';
import NoMatch from './components/NoMatch/NoMatch';

const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      user
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <Route path="/create-new">
           <CreateNew/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
         </Switch>
       </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
