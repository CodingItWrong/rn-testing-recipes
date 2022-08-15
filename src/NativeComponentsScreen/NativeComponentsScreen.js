import {useState} from 'react';
import {Alert, Pressable, Text} from 'react-native';

export default function NativeComponentsScreen() {
  const [confirmationResult, setConfirmationResult] = useState(null);

  function showAlert() {
    Alert.alert('Alert Title', 'This is an alert', [{text: 'OK'}]);
  }

  function showConfirmation() {
    Alert.alert('Confirmation', 'Do you agree?', [
      {text: 'No', onPress: () => setConfirmationResult('tapped No')},
      {text: 'Yes', onPress: () => setConfirmationResult('tapped Yes')},
    ]);
  }

  return (
    <>
      <Pressable onPress={showAlert}>
        <Text>Show Alert Message</Text>
      </Pressable>
      <Pressable onPress={showConfirmation}>
        <Text>Show Confirmation</Text>
      </Pressable>
      {confirmationResult && <Text>{confirmationResult}</Text>}
    </>
  );
}
