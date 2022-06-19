

import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import DefaultButton from '../buttons/defaultButton';
import IconButtonComponent from '../buttons/iconButton';



function MenuCard({chefImg , chefName  , chefFoodType , foodName , foodDescription , foodImg})  {


    return (
        <Card>
        <Card.Title title={chefName} subtitle={chefFoodType} left={(props) =><Avatar.Image size={50} source={chefImg}/> } right={(props) => <IconButtonComponent /> } />
        <Card.Content>
          <Title>{foodName}</Title>
          <Paragraph>{foodDescription}</Paragraph>
        </Card.Content>
        <Card.Cover source={foodImg} />
        <Card.Actions>
          <Button>Order Now</Button>
          <Button>View Detail</Button>
        </Card.Actions>
      </Card>
    )
}
 


export default MenuCard;