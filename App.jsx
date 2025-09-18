import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home.jsx';
import BuracoNegro from './components/buraconegro.jsx';
import Planetas from './components/planetas.jsx';
import Galaxias from './components/galaxia.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component = { HomeScreen } />
        <Stack.Screen name="BuracoNegro" component = { BuracoNegro } />
        <Stack.Screen name="Planetas" component = { Planetas } />
        <Stack.Screen name="Galaxias" component = { Galaxias } />
        {/* Adicione outras telas aqui se desejar */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}