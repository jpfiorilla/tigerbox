import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/userActions';
import bcrypt from 'bcryptjs';

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '', error: '', rememberMe: true };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps){
      console.log(nextProps)
  }
  handleSubmit(e){
      e.preventDefault();
      let { email, password, rememberMe } = this.state, creds = { email: email.toLowerCase(), password, rememberMe };
      if (email && password) {
          this.setState({ error: '' })
          this.props.actions.loginAttempt(creds);
      }
  }
  render() {
    return (
      <div id="login" className='pane'>
        <form>
            <input type='text' placeholder='email' className='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} autoFocus />
            <input type='password' placeholder='password' className='password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
            { this.props.userData.message && <div className='errorMessage'>Invalid credentials</div> }
            { this.state.error && <div className='error'>{lthis.state.error}</div> }
            <div className='rememberOuter'>
                <input id='rememberMe' type='checkbox' checked={this.state.rememberMe} name='Remember Me' onChange={() => this.setState({ rememberMe: !this.state.rememberMe })} />
                <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <input type='submit' className='submit' onClick={this.handleSubmit} />
        </form>
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