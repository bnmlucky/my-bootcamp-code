import React, { Component } from 'react';
import axios from 'axios';

class EditForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      url: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount() {
    console.log('Edit Form Mounted');
    this.setState({
      title: this.props.bookmark.title,
      url: this.props.bookmark.url
    });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleEditSubmit(event) {
    try {
      event.preventDefault();
      console.log('Submitted');
      const bookmarkID = this.props.bookmark._id;
      const url = `http://localhost:3003/bookmarks/${bookmarkID}`;
      const payload = {
        title: this.state.title,
        url: this.state.url
      }
      const updatedBookmark = await axios.put(url, payload);
      console.log('PUT: ', updatedBookmark);
      this.props.getBookmarks();
      this.setState({
        title: '',
        url: ''
      });
    } catch (err) {
      console.log('Update Submit Error: ', err);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleEditSubmit}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
        <input type="text" name="url" value={this.state.url} onChange={this.handleOnChange} />
        <input type="submit" value="Update Bookmark" />
      </form>
    );
  }
}

export default EditForm;
