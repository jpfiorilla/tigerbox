import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UploadLoans from '../ui/svgs/UploadLoans.jsx';
import ViewDashboard from '../ui/svgs/ViewDashboard.jsx';
import Recommendation from '../ui/svgs/Recommendation.jsx';
import Mountain from '../ui/svgs/Mountain.jsx';
import ReactSVG from 'react-svg';
// import ScrollMagic from 'scrollmagic';
// import gsap from 'gsap';

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = 'Home' + globals.titleAppend;

    // this.controller = new ScrollMagic.Controller();
    // this.heroTween = TweenLite.from('.hero', 1, { backgroundPosition: 'center 0%', ease:Power0.easeNone }).to('.hero', 1, { backgroundPosition: 'center 20%' })
    // this.heroTween = TweenLite.to('.hero', 1, { backgroundPosition: 'center 20%' })
    // this.heroTween = TweenLite.from('.hero', 1, { y: '-50%' })
    // this.heroTimeline = new ScrollMagic.Scene({ triggerElement: '.hero', triggerHook: 1 })
    //                                     .setTween(this.heroTween)
    //                                     .addTo(this.controller);
  }
  render() {
    let page = {
      hours: [{ days: `Mon Tue Wed Fri`, times: `10:00AM to 4:00PM` }, { days: `Thur Sun`, times: `10:00AM to 11:45PM` }]
    };
    return (
      <div id="homepage">
        <div id='header'>
          <img src='images/tigerboxheader.jpg' />
        </div>
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
              <a href="" target="__blank">
                <img src='images/seamless.png' />
              </a>
              <a href="https://www.doordash.com/store/tiger-box-brooklyn-70759/?utm_campaign=70759&utm_medium=website&utm_source=partner-link" target="__blank">
                <img src='images/doordash.png' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
