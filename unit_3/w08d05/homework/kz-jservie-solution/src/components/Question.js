import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div>
        <h5>Category: {this.props.randomTrivia.category.title}</h5>
        <h5>Points: {this.props.randomTrivia.value}</h5>
        <h5>Question: {this.props.randomTrivia.question}</h5>
      </div>
    );
  }
}

/*
 * 1. React encourages the use of functional components instead of class components because it's faster.
 * 2. When to use a class vs a functional component?
 * 2a) If you don't need to keep state in the component, use a function instead.
 * 3. Below is the syntax for a functional component. Compare it with the class above.
 */

// const Question = (props) => {
//   return (
//     <div>
//       <h5>Category: {props.randomTrivia.category.title}</h5>
//       <h5>Points: {props.randomTrivia.value}</h5>
//       <h5>Question: {props.randomTrivia.question}</h5>
//     </div>
//   );
// }

export default Question;
