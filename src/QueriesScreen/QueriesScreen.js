import {useState} from 'react';
import {Text, TextInput} from 'react-native';

export default function QueriesScreen() {
  const [inputText, setInputText] = useState('initial input');

  return (
    <>
      <Text>Hello, React Native!</Text>
      <TextInput
        placeholder="Text goes here"
        value={inputText}
        onChangeText={setInputText}
      />
    </>
  );
}
