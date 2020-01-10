import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Score from './components/Score.js'
import LetsPlay from './components/LetsPlay.js'



function App() {
  return (
    <main>
      <div className="App">
        <div>
          <Header />
        </div>
        <section>
          <Score />
        </section>
        <section>
          <LetsPlay />
        </section>

      </div>
    </main>
  );
}

export default App;
