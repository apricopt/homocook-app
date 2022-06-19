import * as React from 'react';
import { Avatar } from 'react-native-paper';



const AvatarComponent = ({path}) => (
  <Avatar.Image size={140} source={path} />
);



export default AvatarComponent;