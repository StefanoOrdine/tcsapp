import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import axios from 'axios';
import HTMLView from 'react-native-htmlview';
import truncate from 'lodash/truncate';

class EventCard extends Component {
  state = { imageUri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnUAAAABCAQAAAAS0pAhAAAAEklEQVR42mNkGAWjYBSMgmEPAAnWAAJnO7DjAAAAAElFTkSuQmCC' }

  constructor(props) {
    super(props);
    axios
      .get(this.props.imageUri)
      .then(({ data: { guid: { rendered } } }) => { this.setState({ imageUri: rendered }) });
  }

  render() {
    const { cardTitle, cardText } = this.props;

    return (
      <Card>
        <CardItem cardBody>
          <Image
            source={ { uri: this.state.imageUri } }
            style={ { height: 200, width: null, flex: 1 } }/>
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
