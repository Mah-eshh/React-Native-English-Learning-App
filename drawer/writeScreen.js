import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} 
      maxLength={1000}
    />
  );
}
const writeScreen = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  return (
    <View
       
      style={{
        backgroundColor: value,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={20}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
export default writeScreen;