import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import menu from './menu';
import { format } from 'currency-formatter';
import * as actions from '../../actions/cartActions';
import flatten from 'lodash.flatten';

let menuItems = [];
menu.forEach(category => category.items.forEach(item => menuItems.push(item)))

class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  mealPrice = (meal) => {
    console.log(meal, menuItems.filter((item) => item.mealName == meal.mealName));
    return meal.quantity * menuItems.filter((item) => item.name == meal.mealName).price;
  }
  render() {
    let cart = [];
    for (var mealName in this.props.cart) cart.push({ mealName, quantity: this.props.cart[mealName] });
    return (
      <div id="cart">
        <div className='meals'>
          {
            cart.map((meal, i) => 
              <div className='cartEntry' key={i}>
                <div className='index'>{(i+1) + '.'}</div>
                <div className='mealName'>{meal.mealName}</div>
                <div className='quantity'>{meal.quantity}</div>
                <div className='mealPrice'>{() => this.mealPrice.bind(this, meal)}</div>
                <div className='mealSubtotal'></div>
              </div>
            )
          }
        </div>
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