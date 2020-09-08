import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Home/Home';
import Friends from './Friends/Friends';
import NotFound from './NotFound/NotFound';
import FriendDetails from './FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
       <Router>
        <Header></Header>
        
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friend:id">
            <FriendDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
    
    </div>
   
  );
}

export default App;
