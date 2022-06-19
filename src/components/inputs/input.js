import * as React from 'react';
import { TextInput } from 'react-native-paper';

const InputComponent = ({title}) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label={title}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default InputComponent;