import { View, Text , Button , StyleSheet ,Image  , Dimensions} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import InputComponent from '../components/inputs/input';
const windowHeight = parseInt(Dimensions.get('window').height);
const windowWidth = parseInt(Dimensions.get('window').width);
export function LoginScreen({route, navigation}) {
    return (
      <View style={{ flex: 1 }}>
      
        <View style={styles.upperSection}>
        
<Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>

        <View style={styles.lowerSection}>
        <Text style={{marginVertical : 5}}>Please Login</Text>
<InputComponent title="Phone number" />
<InputComponent title="Password" />
<Button 
        title="Login"
        color="#841584"
        onPress={() => navigation.navigate("Home") } 
        />
        </View>
       
      </View>
    );
  }


  let styles = StyleSheet.create({
    upperSection : {
      flex: 1,
      // backgroundColor: "green",
    alignItems: "center"
    },
    lowerSection : {
      flex: 1,
      backgroundColor: "#ffff",
      padding : 20
    },
    logo : {
width : windowWidth / 1.3
    }
  })

