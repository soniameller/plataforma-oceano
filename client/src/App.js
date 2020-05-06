import React from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import Home from './views/Home';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
