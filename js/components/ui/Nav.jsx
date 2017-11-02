import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';

const slugify = (phrase) => phrase == 'Home' ? '/' : phrase.toLowerCase().replace(' ', '-');

export default class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <nav>
        { links.map(link => <Link to={slugify(link)} key={link}>{link}</Link>) }
      </nav>
    );
  }
}

const links = [ 'Home', 'Catering', 'Gallery', 'My Story' ];