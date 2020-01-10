import React, { Component } from 'react';
import Daters from './components/Daters.js'
import Header from './components/Header.js'
import Form from './components/Form.js'
import Nav from './components/Nav.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Daters />
        <Form />
      </div>
    );
  }
}
export default App;