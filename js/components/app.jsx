import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import * as actions from '../actions/userActions'
import IdleTimer from 'react-idle-timer';


/**
 * Gets the browser name or returns an empty string if unknown.
 * This function also caches the result to provide for any
 * future calls this function has.
 *
 * @returns {string}
 */

var browser = function() {
    // Return cached result if avalible, else get result then cache it.
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browser.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' :
        isEdge ? 'Edge' :
        "Don't know";
};

console.log(browser());


class App extends React.Component {

  state = {
    timeout: 36000000
  }

  onActive = () => {
    this.setState({
      timeout: 36000000
    })
  }

  onIdle = () => {
    this.props.actions.logOut()
  }

  render() {
    return (
        <div className={"yield browser-" + browser() + " is-mobile-" + globals.isMobile + " is-ios-" + globals.isIos} style={{ overflow: 'hidden' }}>
          <IdleTimer
            ref="idleTimer"
            element={document}
            activeAction={this.onActive}
            idleAction={this.onIdle}
            timeout={this.state.timeout}
            format="MM-DD-YYYY HH:MM:ss.SSS">
              {this.props.children}
          </IdleTimer>
        </div>
    )
  }
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(null, mapDispatchToProps)(App);
