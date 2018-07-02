import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import axios from 'axios';
import HTMLView from 'react-native-htmlview';
import truncate from 'lodash/truncate';
import Placeholder from 'rn-placeholder';

class EventCard extends Component {
  state = { isReady: false }

  constructor(props) {
    super(props);
    axios
      .get(this.props.imageUri)
      .then(({ data: { guid: { rendered } } }) => { this.setState({ imageUri: rendered, isReady: true }) });
  }

  render() {
    const { cardTitle, cardText } = this.props;

    return (
      <Card>
        <CardItem cardBody>
          <Placeholder.Box
            height={200}
            width="100%"
            onReady={this.state.isReady}
          >
            <Image
              source={ { uri: this.state.imageUri } }
              style={ { height: 200, width: null, flex: 1 } }/>
          </Placeholder.Box>
        </CardItem>
        <CardItem>
          <HTMLView value={cardTitle}/>
        </CardItem>
        <CardItem>
          <HTMLView value={truncate(cardText, { length: 150 })}/>
        </CardItem>
      </Card>
    );
  }
}

export default EventCard;
