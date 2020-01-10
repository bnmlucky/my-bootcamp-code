import React, { Component } from 'react';
import axios from 'axios';

class NewForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      url: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
  }

  handleOnChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleCreateSubmit(event) {
    try {
      event.preventDefault();
      const url = 'http://localhost:3003/bookmarks';
      const payload = {
        title: this.state.title,
        url: this.state.url
      }
      await axios.post(url, payload);
      await this.props.getBookmarks();
    } catch (err) {
      console.log('Create Submit Error: ', err);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleCreateSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={this.handleOnChange} />
        <input type="text" name="url" placeholder="URL" onChange={this.handleOnChange} />
        <input type="submit" value="Add Bookmark" />
      </form>
    );
  }
}

export default NewForm;
