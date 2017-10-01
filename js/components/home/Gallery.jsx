import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Header, Footer } from '../ui';

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
        <Header />
        <div className='photos'>
          {
            photos.map(photo => <div className='photo'>
              <div className='subtitle'>{photo.subtitle}</div>
              <img src={'images/' + photo.img} />
            </div>)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

const photos = [
  {
    subtitle: 'Mandoo Making Day',
    img: ''
  },
  {
    subtitle: 'Bulgogi (Box or Bowl)',
    img: ''
  },
  {
    subtitle: 'Spicy Pork Ssam (Appetizer)',
    img: ''
  },
  {
    subtitle: 'Steamed Mandoo',
    img: ''
  }
]