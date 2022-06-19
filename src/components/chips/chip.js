import * as React from 'react';
import { Chip } from 'react-native-paper';

const ChipComponent = ({title}) => (
  <Chip style={{margin:5 }} icon="food" onPress={() => console.log('Pressed')}>{title}</Chip>
);

export default ChipComponent;