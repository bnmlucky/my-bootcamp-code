import React, { Component } from 'react'

class MyComponent extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Hello {this.props.name} {this.props.lastname}</h1>
            </div>
        )
    }
}

export default MyComponent