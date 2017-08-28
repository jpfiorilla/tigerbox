import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UploadLoans from '../ui/svgs/UploadLoans.jsx';
import ViewDashboard from '../ui/svgs/ViewDashboard.jsx';
import Recommendation from '../ui/svgs/Recommendation.jsx';
// import ScrollMagic from 'scrollmagic';
// import gsap from 'gsap';

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { cart: [] };

    this.appetizers = {
      name: 'Appetizers',
      items: [
        { name: `Spicy Pork Ssam`, price: 8, description: `Three wraps of grilled pork with Boston lettuce, gochujang, jalapeño, garlic, cilantro` },
        { name: `Seafood Scallion Pancake`, price: 12, description: `Pan-fried patties of shrimp, clams & squid in special batter; soy dipping sauce` },
        { name: `Tofu Veggie Fritters`, price: 6, description: `Pan-fried patties of crushed tofu, spinach, carrot, onion, soy dipping sauce`, v: true },
        { name: `Tofu Chicken Fritters`, price: 6, description: `Pan-fried patties of crushed tofu, chicken, carrot, onion, soy dipping sauce` },
        { name: `Kimchi Fritters`, price: 6, description: `Pan-fried patties of Kimchi with special batter, soy dipping sauce`, v: true },
        { name: `Fresh Kimchi `, price: 3, description: `Fresh vegan kimchi`, v: true },
      ]
    }
    
    this.sections = [ this.appetizers ];
  }
  render() {
    return (
      <div id="orderForm">
        <form>
          {
            this.sections.map((section, i) => <div className='section' key={i}>
              <div className='sectionTitle'>{section.name}</div>
              {
                section.items.map((item, j) => <div className='menuItem' key={j}>
                  <div className='itemTop'>
                    <div className='num'>{j + '.'}</div>
                    <div className='name'>{item.name}</div>
                    <div className='price'>{item.price}</div>
                  </div>
                  <div className='description'>{item.description}</div>
                </div>)
              }
            </div>)
          }
        </form>
      </div>
    );
  }
}
