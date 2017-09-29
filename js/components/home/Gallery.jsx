import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = 'Gallery' + globals.titleAppend;
  }
  render() {
    return (
      <div id="gallery">
        <div id='header'>
          <img src='images/tigerboxheader.jpg' />
        </div>
        <div className='cateringTop'>
          
        </div>
      </div>
    );
  }
}