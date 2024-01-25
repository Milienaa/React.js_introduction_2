import React, { Component } from 'react';

export default class PictureItem extends Component {
  render() {
    const {url} = this.props;
    return (
      <img src={url} alt="" />
    );
  }
}