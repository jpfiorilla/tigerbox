import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import menu from './menu';
import { format } from 'currency-formatter';
import * as actions from '../../actions/cartActions';
import flatten from 'lodash.flatten';
import CartWidget from './CartWidget';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const squareAppId = `sq0idp-z1X8pQapeL6bDOGxECZ4ww`;
const squarePersonalAccessToken = `sq0atp-NEqlBcSgWN-whfoODJwenw`;
const squareSandboxId = `sandbox-sq0idp-z1X8pQapeL6bDOGxECZ4ww`;
const squareSandbokxToken = `sandbox-sq0atb-zpqw0JX0oWc5W2Mfbhc3rA`;

class Checkout extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="checkout">
        
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({ cart });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);