import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import menu from './menu';
// import ScrollMagic from 'scrollmagic';
// import gsap from 'gsap';

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { cart: [] };
  }
  render() {
    this.totalItem = 0;
    return (
      <div id="orderForm">
        <form>
          {
            menu.map((section, i) => <div className='section' key={i}>
              <div className='sectionTitle'>{section.name}</div>
              {
                section.items.map((item, j) => {
                  this.totalItem++;
                  return(<div className='menuItem' key={j}>
                  <div className='itemTop'>
                    <div className='num'>{this.totalItem + '.'}</div>
                    <div className='name'>{item.name}</div>
                    <div className='price'>{item.price}</div>
                  </div>
                  <div className='itemBot'>
                    <div className='description'>{item.description}</div>
                  </div>
                </div>)})
              }
            </div>)
          }
        </form>
      </div>
    );
  }
}
