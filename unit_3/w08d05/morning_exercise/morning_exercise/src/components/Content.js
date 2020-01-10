import React, { Component } from 'react'
// this is where we will be storing state
import axios from 'axios'
import Button from './Button'
import Image from './Image'

class Content extends Component {
    constructor() {
        super();

        this.state = {
            img.Data = ''
        }
        console.log('init state: ', this.state)

        this.callGiphyApi = this.callGiphyApi.bind(this);

    }

    componentDidMount() {
        this.callGiphyApi();
    }

    async callGiphyApi() {
        try {
            const BASE_URL = 'http://api.giphy.com/v1/gifs/random';
            const APIKey = '' // your own API key

            const apiData = await axios.get(`${BASE_URL}?api_key=${APIKey}`)

            console.log('API sent: ', apiData.data.data.image_original_url);
            const randomGif = apiData.data.data.image_original_url;

            this.setState({
                imgData: randomGif
            })

            console.log("setState: ", this.state);

        } catch (err) {
            console.log('API call error: ', err)
        }
    }
    render() {
        return (
            <main>
                <Button callAPI={this.callGiphyApi} />
                <Image imgData={this.state.imgData} />
            </main>
        )
    }
}
export default Content;