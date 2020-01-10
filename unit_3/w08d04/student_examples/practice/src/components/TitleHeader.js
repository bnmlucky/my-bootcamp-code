import React, { Component } from 'react'

class TitleHeader extends Component {
    render() {
        return (
            <div>
                <h2>The title is {this.props.title}</h2>
            </div>
        )
    }
}

export default TitleHeader