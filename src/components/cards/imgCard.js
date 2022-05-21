import { View, Text , Button , TouchableOpacity, Dimensions , Image , StyleSheet} from 'react-native';
import globalSheet from '../../styles/generalStyles'



  export function ImgCard({ Label , ToExecute , src }) {

    return (
        <TouchableOpacity style={globalSheet.cardPrimary} onPress={ToExecute}>
          <View style={globalSheet.cardInnerContent}>
      <Image
           resizeMode="contain"
           style={globalSheet.cardImg}
           source={src}
         />
           <Text style={globalSheet.primaryText}>{Label}</Text>
           </View>
        </TouchableOpacity>
    );
}

