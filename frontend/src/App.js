import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
// import Header from './components/header/Header'
import { HomePage } from './containers/HomePage'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <HomePage>Hello World</HomePage>
      <Switch>
        <Route path='/' exact/>
      </Switch>
    </Router>
  );
}

export default App;
