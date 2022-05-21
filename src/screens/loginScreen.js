import { View, Text , Button } from 'react-native';

export function LoginScreen({route, navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Please Login</Text>
        <Button 
        title="Login"
        color="#841584"
        onPress={() => navigation.navigate("home") } 
        />
      </View>
    );
  }


