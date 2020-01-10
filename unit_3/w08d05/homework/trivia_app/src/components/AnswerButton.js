import React, { Component } from 'react';

class AnswerButton extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     textDisplay: false
        // }
        this.display = this.display.bind(this);
    }

    display() {
        this.props.displayAnswer()
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.display}>Click to Reveal Answer</button>
            </div>
        )
    }
}
export default AnswerButton;

