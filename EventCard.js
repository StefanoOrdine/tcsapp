import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Card, CardItem } from 'native-base';
import axios from 'axios';
import HTMLView from 'react-native-htmlview';
import truncate from 'lodash/truncate';
import Placeholder from 'rn-placeholder';

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
    axios
      .get(this.props.imageUri)
      .then(({ data: { guid: { rendered } } }) => { this.setState({ imageUri: rendered, isReady: true }); })
      .catch(console.log); // eslint-disable-line
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

EventCard.propTypes = {
  imageUri: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
};

export default EventCard;
