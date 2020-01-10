import React, { Component } from 'react';
import './App.css';
import MyProducts from './components/MyProducts';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return(
      <div className='App'>
        App
        <main>
          <MyProducts />
          <ShoppingCart />
        </main>
      </div>
    )
  }
}

export default App;
