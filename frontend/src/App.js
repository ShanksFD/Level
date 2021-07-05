import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Local imports
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
