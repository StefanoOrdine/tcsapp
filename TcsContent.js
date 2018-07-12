import React from 'react';
import { Content } from 'native-base';

import EventList from './EventList';

const TcsContent = () => (
  <Content padder>
    <EventList />
  </Content>
);

export default TcsContent;
