import React, { Component } from 'react';
import axios from 'axios';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/holidays`, {
      name: this.state.name
    });
    this.setState({
      name: ''
    });
    this.props.getHolidays();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'></label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={this.handleChange}
          value={this.state.name}
          placeholder='add a holiday'
        ></input>
        <input type='submit' value='Add a reason to celebrate'></input>
      </form>
    );
  }
}

export default NewForm;
