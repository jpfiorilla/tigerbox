import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../partials/Header';
import gsap from 'gsap';
// import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Calculating extends React.Component {
  constructor(props){
    super(props);
    this.state = { ellipses: [], textProgress: 1, textComplete: false, caretOn: true };
    let { colorCodes } = globals;
    this.colors = [colorCodes.teal,colorCodes.lightBlue, colorCodes.linkBlue, colorCodes.blue,  colorCodes.gold, colorCodes.red];
    this.text = `Calculating your repayment plan`;
  }
  componentDidMount(){
    this.colors.forEach((color, i) => {
      let timeline = 'tl' + color, className = '.color' + i, speed = 0.5;
      this[timeline] = new TimelineMax({ repeat: -1, ease: Power1.ease });
      this[timeline].set(className, { width: '100%' }).to(className, speed, { width: '30%' }).to(className, speed, { width: '100%' });
      this[timeline].play(i/this.colors.length);
    });

    this.typingTl = new TimelineMax({ repeat: this.text.length-1 });
    this.type = () => this.setState({ textProgress: this.state.textProgress + 1, textComplete: this.text.length == this.state.textProgress + 1 });
    this.typingTl.addCallback(this.type, 0.125);

    this.caretBlink = new TimelineMax({ repeat: -1 });
    this.caretSwitch = () => this.setState({ caretOn: !this.state.caretOn })
    this.caretBlink.addCallback(this.caretSwitch, 0.35);
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.textComplete && !prevState.textComplete){
      this.ellipsesTl = new TimelineMax({ repeat: -1 });
      this.setEllipses = () => {
        return this.state.ellipses.length == 1 ? this.setState({ ellipses: [1, 1] }) :
               this.state.ellipses.length == 2 ? this.setState({ ellipses: [1, 1, 1] }) :
               this.setState({ ellipses: [1] })
      }
      this.ellipsesTl.addCallback(this.setEllipses, 0.35);
    }
  }
  componentWillUnmount(){
    this.colors.forEach((color, i) => this['tl' + color].kill());
    this.typingTl.kill();
    this.caretBlink.kill();
    if (this.ellipsesTl) this.ellipsesTl.kill();
  }
  render() {
    return (
      <div id="calculating">
        { !this.props.noTitle && <div className='title'>
          <span>{this.text.substring(0, this.state.textProgress)}</span>
          { !this.state.textComplete && <span className='caret' style={{ opacity: this.state.caretOn ? 1 : 0 }}>|</span> }
          <span className='ellipses'>{ this.state.ellipses.map(periods => '.') }</span>
        </div> }
        <div className='colors'>{
          this.colors.map((color, i) => <div className={`${color.split(1)} color${i} calculatingColor`} style={{ backgroundColor: color }} key={color} />)
        }</div>
      </div>
    );
  }
}