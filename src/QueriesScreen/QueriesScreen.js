import {useState} from 'react';
import {Image, Text, TextInput} from 'react-native';
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
      <Image
        source={require('../assets/harold.jpg')}
        accessibilityLabel="Harold"
        resizeMode="stretch"
        style={{width: 768 / 2, height: 645 / 2}}
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
