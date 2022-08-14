import {Alert, Pressable, Text} from 'react-native';

export default function NativeComponentsScreen() {
  function showAlert() {
    Alert.alert('Alert Title', 'This is an alert', [{text: 'OK'}]);
  }

  return (
    <Pressable onPress={showAlert}>
      <Text>Show Alert Message</Text>
    </Pressable>
  );
}
