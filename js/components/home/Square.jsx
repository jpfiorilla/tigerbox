import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendNonce } from '../../actions/cartActions';
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
  handleNonce = (nonce, cardData) => {
    console.log(nonce, cardData);
    this.props.sendNonce(nonce);
  }
  handleGetError = (res) => {
    console.log(res);
  }
  handleNonceError = (err) => {
    console.log(err);
  }
  render() {
    return (
      <SquarePaymentForm appId={squareAppId} onNonceGenerated={this.handleNonce} onGetAppIdError={this.handleGetError} onNonceError={this.handleNonceError} />
    );
  }
}

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps, { sendNonce })(Square);