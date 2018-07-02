import axios from 'axios';
import get from 'lodash/get';
import React, { Component } from 'react';
import { View } from 'native-base';

import EventCardPlaceholder from './EventCardPlaceholder';
import EventCard from './EventCard';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: Array(5).fill().map((_, id) => ({ id })),
      isReady: false
    };
    axios
      .get('https://torinocodingsociety.it/wp-json/wp/v2/events')
      .then(({ data }) => this.setState({ events: data, isReady: true }))
      .catch(console.log); // eslint-disable-line
  }

  renderEventList() {
    return this.state.events.map(event => (
      <EventCardPlaceholder
        key={get(event, 'id')}
        onReady={this.state.isReady}
      >
        <EventCard
          key={get(event, 'id')}
          imageUri={get(event, '_links.wp:featuredmedia.0.href')}
          cardTitle={get(event, 'title.rendered')}
          cardText={get(event, 'content.rendered')}
        />
      </EventCardPlaceholder>
    ));
  }

  render() {
    return (<View>{this.renderEventList()}</View>);
  }
}

export default EventList;
