import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QueriesScreen from './src/QueriesScreen/QueriesScreen';
import RecipeList from './src/RecipeList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RN Testing Recipes" component={RecipeList} />
        <Stack.Screen name="Queries" component={QueriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
