import React, { Component } from 'react';

class QuestionText extends Component {
    render() {
        return (
            <div>
                <p>{this.props.questionText}</p>
            </div>
        )
    }
}
export default QuestionText