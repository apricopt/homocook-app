import { View, Text } from 'react-native';
import  {UniversalIcons} from '../components/customIcon';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { MainScreen } from './customerScreens/mainScreen';
import { MenuScreen } from './customerScreens/menuScreen';
import { OrderScreen } from './customerScreens/orderScreen';
const Tab = createMaterialTopTabNavigator();

export function HomeScreen() {
    return (
      <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName={'main'}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return (
              // <Image
              //   style={styles.tinyLogo}
              //   source={require("../assets/chatmdpi.png")}
              // />
              <UniversalIcons focused={focused} routeName={route.name} />
            );
          },
          
        })}
        // screenOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',

        //   showIcon: true,
        //   showLabel: false,
        //   indicatorStyle: {
        //     backgroundColor: '#ffd90c',
        //   },
        //   style: {
        //     backgroundColor: '#3d3d3b',
        //     borderBottomWidth: 2,
        //     borderColor: '#7c7c7c',
        //   },
        //   borderBottomWidth: 0,
        // }}
        
        >
      
      <Tab.Screen name="menu" component={MenuScreen} />
        <Tab.Screen name="feed" component={MainScreen} />
        <Tab.Screen name="order" component={OrderScreen} />

      </Tab.Navigator>

     
    </View>
    );
  }


