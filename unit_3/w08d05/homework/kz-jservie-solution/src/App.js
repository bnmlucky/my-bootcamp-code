import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Question from './components/Question';
import Answer from './components/Answer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomTrivia: {},
      questionButton: false,
      answerButton: false,
      score: 0
    };

    /* Bind all methods (aka: functions) that *YOU* created in a class component. */
    this.handleQuestionBtn = this.handleQuestionBtn.bind(this);
    this.handleAnswerBtn = this.handleAnswerBtn.bind(this);
    this.handleIncrementBtn = this.handleIncrementBtn.bind(this);
    this.handleDecrementBtn = this.handleDecrementBtn.bind(this);
    this.handleResetBtn = this.handleResetBtn.bind(this);
  }

  // componentDidMount = () => {
  //   // this.getRandomTrivia();
  // }

  async getRandomTrivia() {
    try {
      const apiCall = await axios.get('http://jservice.io/api/random');
      console.log('GET OK:', apiCall.data[0]);

      // After checking the response obj from the console.log above,
      const triviaData = apiCall.data[0];

      this.setState({
        randomTrivia: triviaData
      });
      console.log('setState OK:', this.state.randomTrivia);

    } catch (err) {
      console.log('GET Error:', err.message);
    }
  }

  async handleQuestionBtn() {
    /*
     * 1. Turn this into an async function because clicking the button will now also call the API.
     * 2. Notice the await keyword for invoking getRandomTrivia below.
     */
    console.log('Clicked question button');
    
    await this.getRandomTrivia();

    this.setState({
      questionButton: true,

      // From a user experience standpoint, I wanted to automatically set the answer button back to false without having to manually hide the answer every time I click get question.
      answerButton: false
    });
  }

  handleAnswerBtn() {
    console.log('Clicked answer button');
    this.setState({
      answerButton: true
    });

    /* Below is the new thing I wanted to show y'all: using prevState callback to toggle the state of an element dynamically */

    // this.setState(prevState => ({
    //   answerButton: !prevState.answerButton
    // }));
  }

  handleIncrementBtn() {
    console.log('Clicked increment button');
    const questionValue = this.state.randomTrivia.value;
    let newScore = this.state.score;
    newScore += questionValue;
    this.setState({
      score: newScore
    });
  }

  handleDecrementBtn() {
    console.log('Clicked decrement button');
    const questionValue = this.state.randomTrivia.value;
    let newScore = this.state.score;
    newScore -= questionValue;
    this.setState({
      score: newScore
    });
  }

  handleResetBtn() {
    console.log('Clicked reset button');
    let initialScore = 0;
    this.setState({
      score: initialScore
    });
  }

  render() {
    return (
      <main>

        <section>
          <h5>Score: {this.state.score}</h5>
          <button onClick={this.handleIncrementBtn}>Increment</button>
          <button onClick={this.handleDecrementBtn}>Decrement</button>
          <button onClick={this.handleResetBtn}>Reset</button>
        </section>

        <section>
          <h1>Welcome to Jeopardy: Triforce Edition!</h1>

          <button onClick={this.handleQuestionBtn}>Get Question</button>

          {this.state.questionButton && <Question randomTrivia={this.state.randomTrivia} />}

          <button onClick={this.handleAnswerBtn}>Show Answer</button>

          {this.state.answerButton ? <Answer randomTrivia={this.state.randomTrivia.answer} /> : <h5>What is...</h5>}
        </section>

      </main>
    );
  }
}

export default App;
