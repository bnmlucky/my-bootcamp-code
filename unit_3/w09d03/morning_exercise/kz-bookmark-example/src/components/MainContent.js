import React, { Component } from 'react';
import CreateForm from './CreateForm';
import EditForm from './EditForm';
import axios from 'axios';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      editButton: false,
      selectedBookmark: {}
    }
    this.handleEditButton = this.handleEditButton.bind(this);
  }

  async handleEditButton(clickedBookmark) {
    console.log('Clicked Edit Button');
    await this.setState({
      editButton: true,
      selectedBookmark: clickedBookmark
    });
    console.log('Current Bookmark: ', this.state.selectedBookmark);
  }

  async handleDeleteButton(bookmarkID) {
    try {
      console.log('Clicked Delete Button', bookmarkID);
      const url = `http://localhost:3003/bookmarks/${bookmarkID}`;
      await axios.delete(url);
    } catch (err) {
      console.log('DELETE Error: ', err);
    }
  }

  render() {
    const { allBookmarks, getBookmarks } = this.props;
    const { editButton, selectedBookmark } = this.state;
    const showEditForm = editButton ? <EditForm bookmark={selectedBookmark} getBookmarks={getBookmarks} /> : <CreateForm getBookmarks={getBookmarks} />;
    return (
      <main>
        <section>
          <table>
            <tbody>
              {allBookmarks.map((bookmark) => {
                return (
                  <tr key={bookmark._id}>
                    <td>{bookmark.title}</td>
                    <td>{bookmark.url}</td>
                    <td><button onClick={() => this.handleEditButton(bookmark)}>Edit</button></td>
                    <td><button onClick={() => this.handleDeleteButton(bookmark._id)}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <section>{showEditForm}</section>
      </main>
    );
  }
}

export default MainContent;
