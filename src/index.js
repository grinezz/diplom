import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyProfile from './Pages/MyProfile.js' 
import Profile from './Pages/Profile.js' 
import App from './Pages/App.js';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route path="/Profile"><Profile /></Route>
      <Route path="/MyProfile"><MyProfile /></Route>
      <Route path="/"><App /></Route>
    </Switch>
  </Router>
);
reportWebVitals();


