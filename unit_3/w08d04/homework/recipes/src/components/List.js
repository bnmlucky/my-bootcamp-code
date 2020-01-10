import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <ul id="recipe_meta_data" className="list-group">
                <li className="list-group-item">Active: {this.props.activePrep} Hour</li>
                <li className="list-group-item">Total: {this.props.totalPrep} Hours</li>
                <li className="list-group-item">{this.props.servings} Servings </li>
            </ul>
        )
    }
}

export default List