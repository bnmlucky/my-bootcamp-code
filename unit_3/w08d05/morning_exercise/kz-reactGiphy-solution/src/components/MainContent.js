import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button';
import Image from './Image';

class MainContent extends Component {
  constructor() {
    super();

    this.state = {
      imgData: ''
    }

    // console log the initial state object for demo purposes
    console.log('init state: ', this.state);

    // Must bind all methods that *YOU* created in the class component. You can research more into "this"

    this.callGiphyApi = this.callGiphyApi.bind(this);
  }

  componentDidMount() {
    /*
      First, invoke the function in componentDidMount to verify if the API call was successful ("200 OK").

      Second, once the call is successful, then comment it out and pass it to the button.
    */

    // this.callGiphyApi();
  }

  async callGiphyApi() {
    // async await functions for API calls should include a *try* and *catch* block for error handling
    try {
      // breaking the Giphy url into pieces
      const BASE_URL = 'http://api.giphy.com/v1/gifs/random';
      const APIKey = 'jxgpJsyDb6q9gWF7NuqbOfaAxlo8F7CU'

      // make axios call
      const apiData = await axios.get(`${BASE_URL}?api_key=${APIKey}`);

      // console log what the API sent, and step down to the key value you're looking for
      console.log('API sent: ', apiData.data.data.image_original_url);
      
      // assign that key value to a const
      const randomGif = apiData.data.data.image_original_url;
      
      // set state with the API gif string
      this.setState({
        imgData: randomGif
      });
      
      // console log to verify state has been set properly
      console.log('setState: ', this.state);

    } catch (err) {
      // for development, it's okay to console log the error, but for user experience you can do something else to handle errors if the API call didn't resolve its "promise"
      console.log('API call error: ', err);
    }
  }

  render() {
    // 1. pass the API call method as props to the button component
    // 2. pass the state as props to the image component
    
    return (
      <main>
        <Button callAPI={ this.callGiphyApi } />
        <Image imgData={ this.state.imgData }/>
      </main>
    );
  }
}

export default MainContent;
