import { View, Text } from 'react-native';
import Avatar from '../avatars/avatar'
import generalStyles from '../../styles/generalStyles';
import Rating from '../../components/rating/rating'
import Button from '../../components/buttons/defaultButton'

export function AvatarCard({foodType , avatarName , avatarLocation , avatarImage , rating}) {
    return (
     
    
         <View style={generalStyles.avatarCard}>
         <View style={generalStyles.avatarCardAvatar}>
         <Avatar  path={avatarImage} />
         <Rating rating={rating} />
     </View>
     
     <View style={generalStyles.avatarCardContent}>
         <View style={{flex:4 ,justifyContent:"center"}}>
         <Text style={generalStyles.avatarText}>{avatarName}</Text>
          <Text style={generalStyles.avatarText}>{foodType}</Text>
         <Text style={generalStyles.avatarText}>{avatarLocation}</Text>
         </View>
         <View style={{flex:1 , justifyContent:"center"}}>
        <View style={generalStyles.buttonContainer}>
            <Button icon="food" title="View Menu" />
            <Button icon="phone" title="Contact"/>
            

        </View>
        </View>

  
     </View>
     </View>

     

    );
  }


