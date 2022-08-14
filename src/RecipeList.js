import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text} from 'react-native';

export default function RecipeList() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.row}
      onPress={() => navigation.navigate('Queries')}
    >
      <Text style={styles.rowText}>Queries</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
  },
  rowText: {
    fontSize: 18,
  },
});
