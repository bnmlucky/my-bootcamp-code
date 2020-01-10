import React, { Component } from 'react';
import MyImage from './components/MyImage'
import BioFacts from './components/BioFacts'
import './App.css';



class App extends Component {
  render() {
    const sayHello = () => {
      alert('hello');
    }
    return (
      <div className="App">
        <div className="bio-container">
          <MyImage imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHSsghJ-0my2jzfwegB1_Lh579Cv13ovMXamTA7X3GNDrcNk2TQ&s" alt="my photo" />
          <BioFacts name="Natalia Titova" age="139" hometown="Voronezh" style={{ color: '#b15952', fontFamily: 'Arial' }} shortBio="A person who likes books, cats and coffee." bar={sayHello} />
        </div>
        <div className="bio-container">

        </div>
      </div>
    );
  }
}

export default App;
