import React from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  )
}

export default App;
