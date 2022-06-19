import * as React from 'react';
import { IconButton } from 'react-native-paper';

const IconButtonComponent = () => (
  <IconButton
    icon="menu"
    iconColor="#ff6e17"
    size={20}
    onPress={() => console.log('Pressed')}
  />
);

export default IconButtonComponent;