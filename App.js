import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen  } from './src/screens/loginScreen';
import { HomeScreen } from './src/screens/homScreen';
import { CustomerOrSupplier } from './src/screens/customerOrSupplierScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="customerorsupllier" component={CustomerOrSupplier} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;