import React, { Component } from 'react'

class MyImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imageSrc} />
            </div>
        )
    }
}

export default MyImage