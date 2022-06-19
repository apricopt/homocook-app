import { View, Text, ScrollView } from 'react-native';
import Card from '../../components/cards/menuCards'
import ChipContainer from '../../components/chips/chipContainer'

export function MenuScreen() {
    return (
      <View style={{flex: 1}}>
<ChipContainer />
<ScrollView style={{flex:1 , paddingHorizontal : 10}}>
<Card chefImg={require("../../assets/chefs/chef3.jpg")}   chefName="Rani Baigum"  chefFoodType="Halka Phulka"  foodName="Aalu Gobi" foodDescription="Delicious Gobi with michi on Fire!" foodImg={require("../../assets/food/food3.png")} />
     <Card chefImg={require("../../assets/chefs/chef2.jpg")}   chefName="Sultana"  chefFoodType="Desi Food"  foodName="Karahi Special" foodDescription="finger licking tasty karahi" foodImg={require("../../assets/food/food1.jpg")} />
     <Card chefImg={require("../../assets/chefs/chef1.jpg")}   chefName="Chef Azeem"  chefFoodType="Biryani Guru"  foodName="Special Karachi Biryani" foodDescription="Karachi's Famous Biryani" foodImg={require("../../assets/food/biryani.jpg")} />
   

    
     </ScrollView>
     
    </View>
    );
  }


