import * as React from 'react';
import { Button } from 'react-native-paper';

const DefaultButton = ({title , icon}) => (
  <Button  icon={icon} mode="contained" onPress={() => console.log('Pressed')}>
  {title}
  </Button>
);

export default DefaultButton;