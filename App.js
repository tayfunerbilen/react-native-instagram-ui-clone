import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, SafeAreaView } from 'react-native';

import {
  HomeFilled,
  Home,
  Search,
  SearchFilled,
  Reel,
  ReelFilled,
  Shop,
  ShopFilled,
} from './icons';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ReelScreen from './screens/ReelScreen';
import ShopScreen from './screens/ShopScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopWidth: 1,
              borderTopColor: '#DBDBDB',
              height: 50,
              paddingTop: 15,
              paddingBottom: 15,
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#333',
          }}
        >
          <Tab.Screen
            name="home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color }) => {
                const Icon = focused ? HomeFilled : Home;
                return <Icon fill={color} />;
              },
            }}
          />
          <Tab.Screen
            name="search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ focused, color }) => {
                const Icon = focused ? SearchFilled : Search;
                return <Icon fill={color} />;
              },
            }}
          />
          <Tab.Screen
            name="reel"
            component={ReelScreen}
            options={{
              tabBarIcon: ({ focused, color }) => {
                const Icon = focused ? ReelFilled : Reel;
                return <Icon fill={color} />;
              },
            }}
          />
          <Tab.Screen
            name="shop"
            component={ShopScreen}
            options={{
              tabBarIcon: ({ focused, color }) => {
                const Icon = focused ? ShopFilled : Shop;
                return <Icon fill={color} />;
              },
            }}
          />
          <Tab.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused, color }) => {
                return (
                  <Image
                    style={{
                      ...styles.avatar,
                      borderWidth: focused ? 1 : 0,
                    }}
                    source={{
                      uri:
                        'https://pbs.twimg.com/profile_images
