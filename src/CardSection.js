import React from 'react';
import {CardElement} from 'react-stripe-elements';
import Base from './base.css'

class CardSection extends React.Component {
  render() {
    return (
      <label>
        Card details
        <CardElement className="stuff" style= {{ base: { color: '#fff',
    fontWeight: 500,
    color: 'black',
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '20px',
    fontSmoothing: 'antialiased' }}} />
        </label>
    );
  }
};

export default CardSection;

