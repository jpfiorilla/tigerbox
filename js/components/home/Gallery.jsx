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
        <div className='title'>GALLERY</div>
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
    img: 'mandoo.JPG'
  },
  {
    subtitle: 'Bulgogi (Box or Bowl)',
    img: 'bulgogi.jpg'
  },
  {
    subtitle: 'Spicy Pork Ssam (Appetizer)',
    img: 'spicy.jpg'
  },
  {
    subtitle: 'Steamed Mandoo',
    img: 'steamed.JPG'
  }
]