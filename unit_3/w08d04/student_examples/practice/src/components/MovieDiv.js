import React, { Component } from 'react';
import TitleHeader from './TitleHeader.js'
import axios from 'axios';

class MovieDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.changeTitle = this.changeTitle.bind(this);
    }

    async componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then(jsonRes => {
        //         this.setState({
        //             title: jsonRes.title
        //         })
        //     })

        // axios('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => {
        //         const data = response.data;
        //         this.setState({
        //             title: data.title
        //         })
        //     });

        const response = await axios('https://jsonplaceholder.typicode.com/todos/1');
        const data = response.data;
        this.setState({
            title: data.title
        })

    }

    changeTitle() {
        this.setState({
            title: "Rick and Morty"
        })
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <TitleHeader title={this.state.title} />
                <button onClick={this.changeTitle}>Change Title</button>
            </div>
        )
    }
}

export default MovieDiv;