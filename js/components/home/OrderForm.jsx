import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import menu from './menu';
import { format } from 'currency-formatter';
// import ScrollMagic from 'scrollmagic';
// import gsap from 'gsap';

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  handleChange = (name, e) => {
    if (typeof(e) !== 'number') e = e.target.value;
    if (e > -1) this.setState({ [name]: e })
  }
  render() {
    this.totalItem = 0;
    console.log(this.state)
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
                    <div className='price'>{format(item.price, { code: 'USD' }).split('.00')[0]}</div>
                  </div>
                  <div className='itemBot'>
                    <div className='description'>{item.description}</div>
                    <div className='quantityOuter'>
                      <div className='subtract' onClick={() => this.handleChange(item.name, (this.state[item.name] - 1))}>-</div>
                      <input type='text' value={this.state[item.name] || ''} onChange={this.handleChange.bind(this, item.name)} placeholder='0' />
                      <div className='add' onClick={() => this.handleChange(item.name, (this.state[item.name] || 0 + 1))}>+</div>
                    </div>
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
