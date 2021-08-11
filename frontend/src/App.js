import React from 'react';
import './index.css'
import { Route } from 'react-router';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Niffty</a>
            </div>
            <div>
                <a href="/cart">Carrt</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen} ></Route>
          <Route exact path="/" component={HomeScreen} ></Route>
        </main>
        <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
