import { View, Text , Button , TouchableOpacity, Dimensions , Image , StyleSheet} from 'react-native';
import globalSheet from '../styles/generalStyles'
import { ImgCard } from '../components/cards/imgCard';
// import { PrimaryButton } from '../components/cards/imgCard';
const windowHeight = Dimensions.get('window').height;
export function CustomerOrSupplier({route, navigation}) {
    return (
      <View style={globalSheet.screenBody}>
        <Text style={globalSheet.bannerText}>How you wanna use homoCook?</Text>
        <View style={{flex:1  , justifyContent:"space-evenly"}}>
        <ImgCard Label="Eat Food"  src={require("../assets/food.png")} ToExecute={() => navigation.navigate("Login")} />
       
        <ImgCard Label="Provide Food" src={require("../assets/supplier.png")} ToExecute={() => navigation.navigate("Login")} />
        </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    cardImg: {
      width: 400,
    //   height: 300,
    flex: 1
    }
  });
  


