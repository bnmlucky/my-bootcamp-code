import React from 'react'

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.callAPI}></button>
        )
    }
}
export default Button;