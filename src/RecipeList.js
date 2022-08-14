import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text} from 'react-native';

const rows = [{name: 'Queries'}, {name: 'Native Components'}];

export default function RecipeList() {
  const navigation = useNavigation();
  return (
    <>
      {rows.map(row => (
        <Pressable
          key={row.name}
          style={styles.row}
          onPress={() => navigation.navigate(row.name)}
        >
          <Text style={styles.rowText}>{row.name}</Text>
        </Pressable>
      ))}
    </>
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
