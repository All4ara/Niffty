import React from 'react';
import './index.css'
import data from './data.js'
import Product from './components/Product.js'

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Niffty</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
            <div>
                <div className="row center">

                { data.products.map((product) => (
                    <Product key={product._id} product={product}/>
                ))}

                </div>
            </div>
        </main>
        <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
