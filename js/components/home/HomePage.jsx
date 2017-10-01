import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import Cart from './Cart';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Header, Footer } from '../ui';

const page = {
    hours: [{ days: `Mon Tue Wed Fri`, times: `10:00AM to 4:00PM` }, { days: `Thur Sun`, times: `10:00AM to 11:45PM` }]
};

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = 'Home' + globals.titleAppend;
  }
  render() {
    return (
      <div id="homepage">
        <CSSTransitionGroup transitionName='cart' transitionEnterTimeout={150} transitionLeaveTimeout={150}>
          { Object.keys(this.props.cart || {}).length && <Cart /> }
        </CSSTransitionGroup>
        <Header />
        <div className='content'>
          <div className='infobox'>
            <div className='addrPhone'>
              <span>169 Park Ave. Brooklyn (btw Carlton and Adelphi)</span>
              <span>646-320-1177</span>
            </div>
            <div className='hours'>
              {
                page.hours.map((hour, i) => <div className='row' key={i}>
                  <div className='days'>{hour.days}</div>
                  <div className='times'>{hour.times}</div>
                </div>)
              }
            </div>
            <div className='orderLinks'>
              <a href="https://www.grubhub.com/restaurant/tiger-box-169-park-ave-brooklyn/349391?classicAffiliateId=%2Fr%2Fw%2F53631%2F&utm_source=content-cms.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=349391" target="__blank">
                <img src='images/grubhub.png' />
              </a>
              <a href="https://www.seamless.com/menu/tiger-box-169-park-ave-brooklyn/349391" target="__blank">
                <img src='images/seamless.png' />
              </a>
              <a href="https://www.doordash.com/store/tiger-box-brooklyn-70759/?utm_campaign=70759&utm_medium=website&utm_source=partner-link" target="__blank">
                <img src='images/doordash.png' />
              </a>
            </div>
          </div>
        </div>
        <OrderForm />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps, null)(HomePage);