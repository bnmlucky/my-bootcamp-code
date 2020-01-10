import React, { Component } from 'react';

class Answer extends Component {
  render() {
    return (
      <div>
        <h5>What is: {this.props.randomTrivia}</h5>
      </div>
    );
  }
}

/*
 * 1. Review my comment in Question.js regarding class vs functional component.
 * 2. Compare the syntax between a class component vs a functional component.
 */

// const Answer = (props) => {
//   return (
//     <div>
//       <h5>What is: {props.randomTrivia}</h5>
//     </div>
//   );
// }

export default Answer;
