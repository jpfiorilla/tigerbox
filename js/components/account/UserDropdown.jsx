import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/userActions';
import ReactSVG from 'react-svg';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = { dropdown: false };
  }
  render() {
    return (
      <div id="userDropdown">
        <div className='userPhotoOuter' onClick={() => this.setState({ dropdown: !this.state.dropdown })}>
          <ReactSVG path='/images/header/Profile.svg' />
          <div className='name'>{this.props.userData.firstName}</div>
        </div>
        { this.state.dropdown && <div className='clickOff' onClick={() => this.setState({ dropdown: false })} /> }
        <CSSTransitionGroup transitionName='userDropdown' transitionEnterTimeout={100} transitionLeaveTimeout={100}>
          { this.state.dropdown && <ul className='userDropdown pane'>
            <li className='dashboardLink'><Link to='/dashboard'>Dashboard</Link></li>
            <li className='logout' onClick={this.props.actions.logOut}>Log Out</li>
          </ul> }
        </CSSTransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
	return { userData: state.userData }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);