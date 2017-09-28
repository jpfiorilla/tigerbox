import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/cartActions';

class CartWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handleChange = (name, num) => {
    let state = {...this.props.cart, [name]: Number(num)};
    for (var meal in state) if (state[meal] == 0) delete state[meal];
    if (num > -1) this.props.actions.cartSet(state);
  }
  render() {
    // console.log(this.props.cart);
    return (
      <div className='quantityOuter cartWidget'>
        <div className='subtract' onClick={() => this.handleChange(this.props.name, (this.props.cart[this.props.name] - 1))}>-</div>
        <input type='text' value={this.props.cart[this.props.name] || ''} onChange={(e) => this.handleChange(this.props.name, e.target.value)} placeholder='0' />
        <div className='add' onClick={() => this.handleChange(this.props.name, (this.props.cart[this.props.name] || 0) + 1)}>+</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartWidget);