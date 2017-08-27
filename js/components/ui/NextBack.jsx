import React from 'react';
import { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default class NextBack extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  goBack = () => { browserHistory.goBack() }
  render() {
    return (
      <div id="nextAndBackButtons" className='buttons'>
        { !this.props.hideBack && <button className='backButton'
          onClick={this.props.back || this.goBack}
        >Back</button> }
        <button className='nextButton'
          onClick={ this.props.valid ? this.props.next : null}
          style={ this.props.valid ? { backgroundColor: globals.colorCodes.blue, cursor: 'pointer' } : { backgroundColor: globals.colorCodes.blueGrey, cursor: 'default' } }
        >{ this.props.nextText || 'Next'}</button>
      </div>
    );
  }
}

NextBack.propTypes = {
  // valid: PropTypes.bool.isRequired,
  // next: PropTypes.func.isRequired
}