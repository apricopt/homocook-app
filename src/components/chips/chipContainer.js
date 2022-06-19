import { View, Text } from 'react-native';
import Chip from './chip'
import generalStyles from '../../styles/generalStyles';


export function ChipContainer() {
    return (
      <View style={generalStyles.chipContainer}>
<Chip title="Only Desi" />
<Chip title="Rating more than 4"/>
    </View>
    );
  }


export default ChipContainer
