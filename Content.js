/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import EventList from './EventList';

export default () => (
  <Content padder>
    <EventList />
  </Content>
)
