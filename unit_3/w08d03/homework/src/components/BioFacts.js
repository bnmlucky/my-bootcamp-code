import React, { Component } from 'react'
import Bio from './Bio.js'
import Facts from './Facts.js'

class BioFacts extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <Bio
                    name={this.props.name}
                    age={this.props.age}
                    hometown={this.props.hometown}
                />
                <Facts shortBio={this.props.shortBio} bar={this.props.bar} />
            </div>
        )
    }
}

export default BioFacts;