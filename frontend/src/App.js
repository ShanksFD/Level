import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Local imports
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import MiceScreen from './screens/MiceScreen';
import HeadsetsScreen from './screens/HeadsetsScreen';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact/>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/mice" component={MiceScreen} />
        <Route path="/headsets" component={HeadsetsScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
