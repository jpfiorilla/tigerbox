import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import Nav from './Nav';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id='header'>
        <Nav />
        <Link to="/">
          <img src='images/tigerboxheader.jpg' />
        </Link>
      </div>
    );
  }
}