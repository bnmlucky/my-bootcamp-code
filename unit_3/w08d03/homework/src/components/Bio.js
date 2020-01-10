import React, { Component } from 'react'

class Bio extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name} | {this.props.hometown} | {this.props.age}</h2>
            </div>
        )
    }
}

export default Bio