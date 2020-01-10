import React, { Component } from 'react';

class ApiInfo extends Component {

    render() {
        return (
            <div className="infoDiv">
                <h3>Category: {this.props.category}</h3>
                <h3>Points: {this.props.points}</h3>
                <h3>Question: {this.props.Question}</h3>
            </div>
        )
    }
}
export default ApiInfo;