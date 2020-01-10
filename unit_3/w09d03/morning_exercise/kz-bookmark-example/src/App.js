import React, { Component } from 'react';
import MainContent from './components/MainContent';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookmarks: [],
      apiIsLoaded: false
    }
    this.getAllBookmarks = this.getAllBookmarks.bind(this);
  }

  componentDidMount() {
    this.getAllBookmarks();
  }

  async getAllBookmarks() {
    try {
      const url = 'http://localhost:3003/bookmarks';
      const collection = await axios.get(url);
      console.log('GET OK: ', collection.data);
      const bookmarksData = collection.data;
      this.setState({
        bookmarks: bookmarksData,
        apiIsLoaded: true
      });
      console.log('setState: ', this.state);
    } catch (err) {
      console.log('GET Error: ', err);
    }
  }

  render() {
    const { bookmarks } = this.state;
    return (
      <div>
        <h2>The Bestest Bookmark App</h2>
        {this.state.apiIsLoaded ? <MainContent allBookmarks={bookmarks} getBookmarks={this.getAllBookmarks} /> : <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;
