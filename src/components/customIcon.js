import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';




export function UniversalIcons(props) {
  let {focused, routeName} = props;

  let imgSource;
  let iconName;
  let size = 24;
  let focusedSize = 24;
  let color = '#828282';
  //   let focusedColor = '#ffd90c';
  let focusedColor = '#b8b8b8';

  if (routeName === 'chat') {
    if (focused) {
      return (
        <Ionicons
          name="chatbox-ellipses-sharp"
          size={focusedSize}
          color={focusedColor}
        />
      );
    } else {
      return (
        <Ionicons name="chatbox-ellipses-outline" size={size} color={color} />
      );
    }
  }  else if (routeName == 'main') {
    if (focused) {
      return (
        <Ionicons name="home-sharp" size={focusedSize} color={focusedColor} />
      );
    } else {
      return <Ionicons name="home-outline" size={size} color={color} />;
    }
  } 
  else if (routeName == 'menu') {
    if (focused) {
      return (
        <Ionicons name="fast-food" size={focusedSize} color={focusedColor} />
      );
    } else {
      return <Ionicons name="fast-food-outline" size={size} color={color} />;
    }
  } 
  else if (routeName == 'order') {
    if (focused) {
      return (
        <Ionicons name="cart" size={focusedSize} color={focusedColor} />
      );
    } else {
      return <Ionicons name="cart-outline" size={size} color={color} />;
    }
  } 
  else if (routeName == 'chefs') {
    if (focused) {
      return (
        <Ionicons name="restaurant" size={focusedSize} color={focusedColor} />
      );
    } else {
      return <Ionicons name="restaurant-outline" size={size} color={color} />;
    }
  } 
  return (
    <Image
      style={styles.tinyLogo}
      source={require('../assets/logout.png')}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    height: 27,
    width: 27,
  },
  tinyLogoSelected: {
    height: 30,
    width: 34,
  },
});
