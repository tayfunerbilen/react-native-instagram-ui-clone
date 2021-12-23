import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, SafeAreaView} from "react-native";

const Tab = createBottomTabNavigator();

// Icons
import {HomeFilled, Home, Search, SearchFilled, Reel, ReelFilled, Shop, ShopFilled} from "./icons";

// screens
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";
import ReelScreen from "./screens/reel";
import ShopScreen from "./screens/shop";
import ProfileScreen from "./screens/profile";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            <SafeAreaView style={{flex: 1}}>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 1,
                            borderTopColor: '#DBDBDB',
                            height: 50,
                            paddingTop: 15,
                            paddingBottom: 15
                        },
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: '#000',
                        tabBarInactiveTintColor: '#333'
                    }}
                >
                    <Tab.Screen
                        name="home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                if (focused)
                                    return <HomeFilled fill={color}/>
                                return <Home fill={color}/>
                            }
                        }}
                    />
                    <Tab.Screen
                        name="search"
                        component={SearchScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                if (focused)
                                    return <SearchFilled fill={color}/>
                                return <Search fill={color}/>
                            }
                        }}
                    />
                    <Tab.Screen
                        name="reel"
                        component={ReelScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                if (focused)
                                    return <ReelFilled fill={color}/>
                                return <Reel fill={color}/>
                            }
                        }}
                    />
                    <Tab.Screen
                        name="shop"
                        component={ShopScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                if (focused)
                                    return <ShopFilled fill={color}/>
                                return <Shop fill={color}/>
                            }
                        }}
                    />
                    <Tab.Screen
                        name="profile"
                        component={ProfileScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                return <Image
                                    style={{
                                        ...styles.avatar,
                                        borderWidth: focused ? 1 : 0
                                    }}
                                    source={{
                                        uri: 'https://pbs.twimg.com/profile_images/1469715048436277258/141ZXcHO_400x400.jpg',
                                    }}
                                />
                            }
                        }}
                    />
                </Tab.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 24,
        borderColor: '#000'
    }
})
