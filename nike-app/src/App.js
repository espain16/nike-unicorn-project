import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './styles/styles.css';
import Search from './components/Search';
import Logo from './components/Logo';
import WomenBtn from './components/WomenBtn';
import MenBtn from './components/MenBtn';
import ShoppingCart from './components/ShoppingCart';
import Favorite from './components/Favorite';

const App = () => {
  return (
    <Router>
      <div className="App">
        <section className="landingPage">
          <div className="navigation">
            <Logo/>
            <WomenBtn/>
            <MenBtn/>
            <Search/>
            <Favorite/>
            <ShoppingCart/>
          </div>
        </section>
        <section className="women" id="women-section">

        </section>
        
      </div>
    </Router>
  );
}

export default App;
