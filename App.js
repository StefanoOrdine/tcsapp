/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container } from 'native-base';

import Header from './Header';
import Content from './Content';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
      </Container>
    );
  }
}
