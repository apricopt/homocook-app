import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { AvatarCard } from '../../components/cards/avatarCard';
import generalStyles from '../../styles/generalStyles';


export function ChefScreen() {
    return (
      <View style={{flex: 1}}>

      <ScrollView style={{flex:1}} >
     <AvatarCard avatarImage={require('../../assets/chefs/chef2.jpg')} avatarName={"Sultana"} avatarLocation={"Near Muree Road"} foodType={"Desi Food"} rating={4.5} />
     <AvatarCard avatarImage={require('../../assets/chefs/chef1.jpg')} avatarName={"Chef Ameez"} avatarLocation={"Near Shamsabad Road"} foodType={"Biryani Guru"} rating={4} />
     <AvatarCard avatarImage={require('../../assets/chefs/chef3.jpg')} avatarName={"Rani Baigum"} avatarLocation={"Near Muree Road"} foodType={"Halka Phulka"} rating={3} />
     <AvatarCard avatarImage={require('../../assets/chefs/chef4.jpg')} avatarName={"Sultan"} avatarLocation={"Near Muree Road"} foodType={"Ghar ka fast food"} rating={5} />
     </ScrollView>
  

     
    </View>
    );
  }


