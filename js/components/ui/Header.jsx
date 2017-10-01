import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id='header'>
        <img src='images/tigerboxheader.jpg' />
      </div>
    );
  }
}