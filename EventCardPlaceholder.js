import React from 'react';
import { Card, CardItem } from 'native-base';
import Placeholder from 'rn-placeholder';

const EventCardPlaceholder = () => (
  <Card>
    <CardItem cardBody>
      <Placeholder.Box
        height={200}
        width="100%"
      />
    </CardItem>
    <CardItem>
      <Placeholder.Box
        height={20}
        width="50%"
      />
    </CardItem>
    <CardItem>
      <Placeholder.Box
        height={50}
        width="95%"
      />
    </CardItem>
  </Card>
);

export default Placeholder.connect(EventCardPlaceholder);
