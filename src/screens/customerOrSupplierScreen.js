import { View, Text , Button , TouchableOpacity, } from 'react-native';
import globalSheet from '../styles/generalStyles'

export function CustomerOrSupplier({route, navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>How you wanna use homoCook?</Text>
        <TouchableOpacity style={globalSheet.btnPrimary} onPress={() => navigation.navigate("login")}>
            <Text style={globalSheet.btnText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalSheet.btnPrimary} onPress={() => navigation.navigate("login")}>
            <Text style={globalSheet.btnText}>Supplier</Text>
        </TouchableOpacity>
      </View>
    );
  }


