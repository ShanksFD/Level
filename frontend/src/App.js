import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Local imports
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
