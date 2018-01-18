import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from 'react-dom';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_HLjvVw929Q9McZrQVJoJ9S0w">
         <MyStoreCheckout />
      </StripeProvider>
    );
  }
}

export default App;
