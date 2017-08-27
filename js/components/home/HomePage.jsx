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
      header: "Hompeage Header",
      subheader: "Hompeage SubHeader"
    }, homeImg = 'images/home/',
      people = [
        { name: 'David', situation: 'DEBT: $300,000 // DEGREE: MD', description: `David is deciding between working at a public hospital to qualify for Public Service Loan Forgiveness or at a private hospital to refinance his loans.` },
        { name: 'Yvette', situation: 'DEBT: $80,000 // DEGREE: BA', description: `Yvette is joining the Peace Corps with an annual salary of $4,646 and is confused about how to lower her monthly loan payments while abroad.` },
        { name: 'Alex', situation: 'DEBT: $65,000 // DEGREE: NONE', description: `Alex is struggling with loan payments after dropping out halfway through college to provide for younger siblings.` }
      ]
    return (
      <div id="homepage">

      </div>
    );
  }
}
