import React, { Component } from 'react';


class Furniture extends Component {
    render() {
        const recommendationMade = this.props.recommendationMade ? (<p>You clicked this</p>) : (<button onClick={() => this.props.restore()}>Restoration Advice</button>);
        const renderBtn2 = !this.props.recommendationMade && (<button onClick={() => this.props.restore()}>Restoration Advice</button>);
        //         < button onClick = {() => this.props.restore()
        // }> Restoration Advice </button >
        return (
            <ul>
                <li>{this.props.chair}{recommendationMade}</li>

            </ul>
        )
    }
}

export default Furniture