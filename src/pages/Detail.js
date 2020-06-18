import React, { Component } from 'react';
import qs from 'querystring';

export default class Detail extends Component {
  componentDidMount() {
    const query = qs.parse(this.props.location.search.slice(1));
    console.log(query);
  }

  render() {
    let book = {};
    if (this.props.location.state) {
      const { id, name, genre } = this.props.location.state;
      book = { id, name, genre };
    }
    return (
      <>
        {book.id && (
          <div>
            <div>{book.id}</div>
            <div>{book.name}</div>
            <div>{book.genre}</div>
          </div>
        )}
      </>
    );
  }
}
