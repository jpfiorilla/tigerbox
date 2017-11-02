import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Square from './Square';
import { Header } from '../ui';

const squareAppId = `sq0idp-z1X8pQapeL6bDOGxECZ4ww`;
const squarePersonalAccessToken = `sq0atp-NEqlBcSgWN-whfoODJwenw`;
const squareSandboxId = `sandbox-sq0idp-z1X8pQapeL6bDOGxECZ4ww`;
const squareSandbokxToken = `sandbox-sq0atb-zpqw0JX0oWc5W2Mfbhc3rA`;

class CheckoutPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id='checkoutPage'>
        <Header logoless={true} />
        <Square />
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps, {  })(CheckoutPage);