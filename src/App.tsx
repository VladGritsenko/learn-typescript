import React from 'react'
import './App.css';

import MainScreen from './components/MainScreen/MainScreen';
import {Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history'

function App() {
  const history = createBrowserHistory();
  
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path='/learn-typescript/' component={MainScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
