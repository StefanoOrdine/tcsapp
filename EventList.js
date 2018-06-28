import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, View } from 'native-base';
import axios from 'axios';

import EventCard from './EventCard';

class EventList extends Component {
  state = { events: [] };

  componentWillMount() {
    const events = axios
      .get('https://torinocodingsociety.it/wp-json/wp/v2/events')
      .then(({ data }) => this.setState({ events: data }))
      .catch(console.log);
  }

  renderEventList() {
    return this.state.events.map((event) => (
      <EventCard
        key={event.id}
        imageUri={event['_links']['wp:featuredmedia'][0].href}
        cardTitle={event.title.rendered}
        cardText={event.content.rendered}
      />
    ));
  }

  render() {
    return (<View>{this.renderEventList()}</View>);
  }
}

export default EventList;
