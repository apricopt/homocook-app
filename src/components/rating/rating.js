import Star from 'react-native-star-view';
import { View, Text } from 'react-native';
import generalStyles from '../../styles/generalStyles';
// const WATER_IMAGE = require('./water.png')



 function RatingComponent({rating}) {
    return (
        <View style={{flex:1}}>
          <Star score={rating} style={generalStyles.starStyle} />
        </View>
      );
}


export default RatingComponent
