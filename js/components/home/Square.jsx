import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SquarePaymentForm from 'react-square-hosted-fields';

const squareAppId = `sq0idp-z1X8pQapeL6bDOGxECZ4ww`;
const squarePersonalAccessToken = `sq0atp-NEqlBcSgWN-whfoODJwenw`;
const squareSandboxId = `sandbox-sq0idp-z1X8pQapeL6bDOGxECZ4ww`;
const squareSandbokxToken = `sandbox-sq0atb-zpqw0JX0oWc5W2Mfbhc3rA`;

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handleNonce = (nonce) => {
    console.log(nonce);
  }
  handleGetError = (res) => {
    console.log(res);
  }
  render() {
    return (
      <SquarePaymentForm appId={squareAppId} onNonceGenerated={this.handleNonce} onGetAppIdError={this.handleGetError} />
    );
  }
}

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps, {  })(Square);