/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container } from 'native-base';

import TcsHeader from './TcsHeader';
import TcsContent from './TcsContent';

export default class App extends Component {
  render() {
    return (
      <Container>
        <TcsHeader />
        <TcsContent />
      </Container>
    );
  }
}
