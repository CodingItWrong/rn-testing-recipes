import {useState} from 'react';
import {Text, TextInput} from 'react-native';
import DownArrow from '../assets/down-arrow.svg';

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
      <DownArrow
        accessibilityLabel="down arrow"
        fill="black"
        width={100}
        height={100}
      />
    </>
  );
}
