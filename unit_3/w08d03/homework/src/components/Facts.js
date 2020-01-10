import React, { Component } from 'react'

class Facts extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.shortBio}
                </p>
                <button onClick={this.props.bar}>Hello</button>
            </div>
        );
    }
}

export default Facts;