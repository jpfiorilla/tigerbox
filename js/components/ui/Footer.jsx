import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';

export default class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='footer'>
        <div className='left'>© 2016 Tiger Box. All rights reserved.</div>
        <div className='right'>169 Park Ave Brooklyn NY 11205 646-320-1177</div>
      </div>
    );
  }
}