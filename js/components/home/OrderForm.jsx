import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import menu from './menu';
import { format } from 'currency-formatter';
import * as actions from '../../actions/cartActions';

class OrderForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handleChange = (name, num) => {
    if (num > -1) this.setState({ [name]: Number(num) });
    let state = {...this.state, [name]: Number(num)};
    for (var meal in state) if (state[meal] == 0) delete state[meal];
    if (num > -1) this.props.actions.cartSet(state);
  }
  render() {
    this.totalItem = 0;
    console.log(this.props.cart);
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
                      <input type='text' value={this.state[item.name] || ''} onChange={(e) => this.handleChange(item.name, e.target.value)} placeholder='0' />
                      <div className='add' onClick={() => this.handleChange(item.name, (this.state[item.name] || 0) + 1)}>+</div>
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

function mapStateToProps(state, ownProps) {
	return { cart: state.cart }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);