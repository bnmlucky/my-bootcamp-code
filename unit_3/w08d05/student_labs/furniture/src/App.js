import React from 'react';
import logo from './logo.svg';
import './App.css';
import Furniture from './components/Furniture.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      chair: "Grandma's Favorite Chair",
      recommendationMade: false
    }
    this.restore = this.restore.bind(this)
  }

  restore() {
    this.setState({
      chair: `Paint ${this.state.chair} white`,
      recommendationMade: true
    })
  }

  render() {
    return (
      <div className="container App">
        <h1 className="shop-name">Heirloom Furniture Restoration</h1>
        <Furniture chair={this.state.chair} restore={this.restore} recommendationMade={this.state.recommendationMade} />
      </div>
    )
  }
}

export default App;
