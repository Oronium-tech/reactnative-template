import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Home/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
const Tab = createBottomTabNavigator();
const YourApp = () => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#141718',
            borderWidth: 0,
            swipeEnabled: false,
            position: 'absolute',
            bottom: 0,

            justifyContent: 'center',
            alignItems: 'center',

            height: windowHeight * 0.07,
            borderTopWidth: 0,
            margin: 10,
            marginHorizontal: 30,
            borderRadius: 1000,
          },
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Tabs') {
              iconName = focused ? 'ios-heart' : 'ios-heart';
            } else if (route.name === 'S') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Tabs" component={Home} />
        <Tab.Screen name="S" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;
