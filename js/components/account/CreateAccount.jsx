import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/userActions';
import bcrypt from 'bcryptjs';
import ReactSVG from 'react-svg';

export class CreateAccount extends React.Component {
  constructor(props){
    super(props);
    this.state = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', errors: {} };
  }
  componentWillMount(){
      this.props.userData.email && browserHistory.push('/get-started/what-types');
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = 'Create Account' + globals.titleAppend;
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.userData.error) return this.setState({ errors: { email: 'An account already exists with this email' } });
    if (!this.props.userData.email && nextProps.userData.email) return browserHistory.push('/get-started/what-types');
  }
  handleChange = (e, field) => {
    let { errors } = this.state, change = { errors };
    change[field] = e;
    if (errors[field] && this.validate(field, e)) change.errors[field] = '';
    this.setState(change);
  }
  validate = (field, value = this.state[field]) => {
    let error = !value ? `Must enter a${field == 'email' ? 'n' : ''} ${field.split(/(?=[A-Z])/).join(' ').toLowerCase()}` : 'Error';
    if (['firstName', 'lastName'].includes(field)){
        if (!value) return { field, error };
    } else if (field == 'email'){
        if (!value) return { field, error };
        if (!value.includes('@')) return { field, error: 'Must include "@"' };
        if (!value.includes('.')) return { field, error: 'Must include "."' };
        if (!globals.validateEmail(value)) return { field, error: 'Must enter an email address' };
    } else if (field == 'password'){
        if (!value) return { field, error };
        if (value.length < 6) return { field, error: 'Must have length 6 or more' };
    } else if (field == 'confirmPassword'){
        if (!value) return { field, error: 'Must confirm password' };
        if (value != this.state.password) return { field, error: 'Must equal password' };
        if (value.length < 6) return { field, error: 'Must have length 6 or more' };
    }
    return { isValid: true };
  }
  validateAllFields = (state = this.state) => {
    for (var field in state) if (!this.validate(field).isValid) {
        // ReactDOM.findDOMNode(this.refs[this.validate(field).field]) && ReactDOM.findDOMNode(this.refs[this.validate(field).field]).focus();
        return false;
    }
    return true;
  }
  handleCreate = (e) => {
    e.preventDefault();
    if (this.validateAllFields()){
        let { firstName, lastName, email, password } = this.state, account = { firstName, lastName, email: email.toLowerCase() };
        account.password = bcrypt.hashSync(this.state.password, 10);
        // account.confirmPassword = bcrypt.hashSync(this.state.confirmPassword, 10) || null;
        if (this.props.userData.loans && this.props.userData.loans.length) account.loans = this.props.userData.loans;
        this.props.actions.createAccountAttempt(account);
    }
  }
  handleBlur = (fieldName) => {
      if (!this.validate(fieldName).isValid){
          let { errors } = this.state;
          errors[fieldName] = this.validate(fieldName).error;
          this.setState({ errors });
      }
  }
  render() {
    let page = {
      title: `Getting Started`,
      subtitle: `To help you take control of your loans, we’re first going to set up your customized loan dashboard.`,
      paneHeader: `Let's Get Started.`
    }
    return (
      <div id="createAccount">
        <div className='pageContent'>
          <div className='container outerText'>
            <div className='title'>
                <span className='numberOuter'>
                  <span className='number'>1</span>
                </span>
                <span>{page.title}</span>
            </div>
            <div className='subtitle'>{page.subtitle}</div>
            <div className='pane createAccountPane'>
                <div className='paneHeader'>{page.paneHeader}</div>
                <form>
                    <div className='name'>
                        {/*<ReactSVG path='images/get-started/PersonOutline.svg' className='personOutline' />*/}
                        <img src='images/get-started/PersonOutline.svg' />
                        <div className='inputs'>
                            <input type='text' ref='firstName' className={`firstName ${this.state.errors.firstName && 'errorField'}`} placeholder='First Name' value={this.state.firstName} onChange={e => this.handleChange(e.target.value, 'firstName')} onBlur={() => this.handleBlur('firstName')} />
                            { this.state.errors.firstName && <div className='error'>{this.state.errors.firstName}</div> }
                            <input type='text' ref='lastName' className={`lastName ${this.state.errors.lastName && 'errorField'}`} placeholder='Last Name' value={this.state.lastName} onChange={e => this.handleChange(e.target.value, 'lastName')} onBlur={() => this.handleBlur('lastName')}/>
                            { this.state.errors.lastName && <div className='error rightError'>{this.state.errors.lastName}</div> }
                        </div>
                    </div>
                    <div className='email'>
                        {/*<ReactSVG path='images/get-started/Email.svg' className='personOutline' />*/}
                        <img src='images/get-started/Email.svg' />
                        <div className='inputs'>
                            <input type='text' ref='email' className={`email ${this.state.errors.email && 'errorField'}`} placeholder='Email' value={this.state.email} onChange={e => this.handleChange(e.target.value, 'email')} onBlur={() => this.handleBlur('email')} />
                            { this.state.errors.email && <div className='error'>{this.state.errors.email}</div> }
                        </div>
                    </div>
                    <div className='password'>
                        {/*<ReactSVG path='images/get-started/Lock.svg' className='personOutline' />*/}
                        <img src='images/get-started/Lock.svg' />
                        <div className='inputs'>
                            <input type='password' ref='password' className={`password ${this.state.errors.password && 'errorField'}`} placeholder='Password' value={this.state.password} onChange={e => this.handleChange(e.target.value, 'password')} onBlur={() => this.handleBlur('password')}/>
                            { this.state.errors.password && <div className='error'>{this.state.errors.password}</div> }
                            <input type='password' ref='confirmPassword' className={`confirmPassword ${this.state.errors.confirmPassword && 'errorField'}`} placeholder='Re-type' value={this.state.confirmPassword} onChange={e => this.handleChange(e.target.value, 'confirmPassword')} onBlur={() => this.handleBlur('confirmPassword')}/>
                            { this.state.errors.confirmPassword && <div className='error rightError'>{this.state.errors.confirmPassword}</div> }
                        </div>
                    </div>
                    <div className='bySigningUp'>
                        By signing up, you agree to the <Link to='/terms-of-service'>Terms of Service</Link> and <Link to='/privacy-policy'>Privacy Policy</Link>.
                    </div>
                    <div className='buttonOuter'>
                        <button type='submit'
                        style={ this.validateAllFields() ? { backgroundColor: globals.colorCodes.blue, cursor: 'pointer' } : { backgroundColor: globals.colorCodes.grey, cursor: 'default' } }
                        className='createAccountButton' onClick={this.handleCreate}>Create Account</button>
                    </div>
                </form>
            </div>
          </div>
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);