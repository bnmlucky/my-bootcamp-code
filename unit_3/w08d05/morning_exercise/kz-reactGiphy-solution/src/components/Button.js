import React, {Component} from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.callAPI}>Don't Click Me</button>
    );
  }
}

export default Button;
