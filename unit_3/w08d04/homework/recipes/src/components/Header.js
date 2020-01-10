import React, { Component } from 'react'

class Header extends Component {
    render() {
        let UpperCaseTitle = this.props.title.toUpperCase();
        return (
            <header>

                <h1>{UpperCaseTitle}</h1>
                <cite className="contributors">
                    <div>By {this.props.name}</div>
                </cite>

            </header>
        );
    }
}

export default Header;