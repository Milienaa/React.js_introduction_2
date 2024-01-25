import React, { Component } from 'react';
import './app.scss';
import Content from './Content';
import Pictures from './Pictures';

export default class App extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <Content/>
          <Pictures/>
        </div>
      </>
    );
  }
}
