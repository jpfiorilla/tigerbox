import React from 'react';
import { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import menu from './menu';
import { format } from 'currency-formatter';
import * as actions from '../../actions/cartActions';
import flatten from 'lodash.flatten';
import CartWidget from './CartWidget';
import CSSTransitionGroup from 'react-addons-css-transition-group';

let menuItems = [];
menu.forEach(category => category.items.forEach(item => menuItems.push(item)))

class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handleCheckout = () => {
    console.log(this.props.cart);
    browserHistory.push('/checkout');
  }
  render() {
    let cart = [], subtotal = 0;
    for (var mealName in this.props.cart){
      cart.push({ mealName, quantity: this.props.cart[mealName] });
      subtotal += this.props.cart[mealName] * menuItems.filter(item => item.name == mealName)[0].price;
    }
    return (
      <div id="cart">
        <div className='meals'>
          <CSSTransitionGroup transitionName='cartItem' transitionEnterTimeout={150} transitionLeaveTimeout={150}>
            {
              cart.map((meal, i) => {
                let price = menuItems.filter(item => item.name == meal.mealName)[0].price;
                let mealSubtotal = price * cart[i].quantity;
                return (
                  <div className='cartEntry' key={i}>
                    <div className='index'>{(i+1) + '.'}</div>
                    <div className='mealName'>{meal.mealName}</div>
                    <CartWidget name={meal.mealName} />
                    <div className='mealPrice'>
                      <span className='x'>x</span>
                      <span className='price'>{format(price, { code: 'USD' })}</span>
                    </div>
                    <div className='mealSubtotal'>
                      <span className='equals'>=</span>
                      <span className='price'>{format(mealSubtotal, { code: 'USD' })}</span>
                    </div>
                  </div>
                )}
              )
            }
          </CSSTransitionGroup>
        </div>
        { subtotal > 0 && <div className='subtotal'>{format(subtotal, { code: 'USD' })}</div> }
        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
	return { cart: state.cart }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);