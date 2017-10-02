import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Header, Footer } from '../ui';

export default class Catering extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = 'Catering' + globals.titleAppend;
  }
  render() {
    return (
      <div id="catering">
        <Header />
        <div className='cateringTop'>
          <div className='title'>CATERING MENU</div>
          {
            cateringTop.map(row => <div className='row' key={row.left}>
              <div className='left'>{row.left}</div>
              <div className='right'>
                { row.right.map(col => <div className='col' key={col}>{col}</div>) }
              </div>
            </div>)
          }
        </div>
        <div className='packages'>
          <div className='title'>WE ARE OPEN TO DISCUSSION TO ACCOMMODATE YOUR NEEDS. THE PACKAGES ARE NOT LIMITED TO WHAT IS LISTED BELOW.</div>
          {
            packages.map((pack, i) => <div className='package' key={i}>
              <div className='left'>
                <div className='name'>{(i+1) + '. ' + pack.name}</div>
                <div className='description'>{pack.description}</div>
              </div>
              <div className='right'>
                <img src={'images/' + (pack.img || ((i+1) + '.jpg'))} />
              </div>
            </div>)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

const cateringTop = [
  {
    left: 'Pricing',
    right: ['$14 Per Person']
  },
  {
    left: 'Catering Fee',
    right: ['$20 up to 20 orders', '$40 if more than 20 orders']
  },
  {
    left: 'Delivery Fee',
    right: ['$40 up to 40 orders', '$60 if more than 40 orders']
  },
  {
    left: 'Call to Discuss',
    right: ['(646) 320-1177']
  }
]

const packages = [
  {
    name: 'BULGOGI PACKAGE',
    description: '4 OUNCES OF BULGOGI WITH KIMCHI, RICE, ZUCCHINI AND KIMCHI FRITTER',
    image: ''
  },
  {
    name: 'PORK(OR CHICKEN) SSAM PARCKAGE',
    description: '4 OUNCES OF PORK (OR CHICKEN) 3 BOSTON LETTUCE WRAPS WITH KIMCHI, ASTER SCABER RICE, ZUCCHINI AND KIMCHI FRITTER',
    image: ''
  },
  {
    name: 'MAKE YOUR OWN BULGOGI (BEEF) BIBIMBAP',
    description: 'BULGOGI AND 6 SEASONED VERGITABLES: SPINACH, CARROT,RADISH,BEAN SPROUT, ASTER SCABER, CUCUMBER OVER RICE. OPTIONAL FRIED EGG FOR ADDITIONAL PRICE',
    image: ''
  },
  {
    name: 'MAKE YOUR OWN VEGI BIBIMBOP',
    description: '7 SEASONED VEGITABLS:  SPINACH, CARROT, RADISH, BEAN SPROUT, ASTER SCABER, CUCUMBER, SHIITAKE MUSHROOM OVER RICE. OPTIONAL FRIED EGG FOR ADDITIONAL PRICE',
    image: ''
  },
  {
    name: 'DOSIRAK BOX WITH AN OPTION (BEEF, PORK, CHICKEN OR CHAPCHAE)',
    description: '4 CHOICE OF BARCHAN (SIDE DISHES) FROM FISH CAKE, ZUCCHINI, RADISH, SPINACH, BEAN SPROUT, CARROT OR CUCUMBER AND KIMCHI OR TOFU FRITTER',
    image: ''
  },
  {
    name: 'KIMBOP (BEEF, VEGI OR KIMCHI) WITH MISO SOUP',
    description: 'BEEF OR KIMCHI WITH SPINACH, CARROT AND EGG ARE ROLLED IN SEAWEED. 6 OUNCES OF MISO SOUP MADE WITH SPINACH, POTATO AND TOFU COMES FOR FREE',
    image: ''
  },
  {
    name: 'DRINKS ($2 EACH)',
    description: '',
    image: ''
  }
]