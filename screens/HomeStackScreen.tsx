import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProtectedScreen from "./profile/ProtectedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActivityScreen from "./activity/ActivityScreen";
import { View, Text } from "react-native";
import IonIcons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const HomeStackScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProtectedScreen} options={{tabBarIcon: (props) => {
        return <IonIcons name="person" size={props.size} color={props.color} focused={props.focused}/>
      } }}/>
      <Tab.Screen name="Activity" component={ActivityScreen} options={{tabBarIcon: (props) => {
        return <IonIcons name="football" size={props.size} color={props.color} focused={props.focused}/>
      }}}/>
      <Tab.Screen name="Settings" component={() => <View><Text>Settings</Text></View>} options={{tabBarIcon: (props) => {
        return <IonIcons name="settings" size={props.size} color={props.color} focused={props.focused}/>
      }}}/>
    </Tab.Navigator>
  );
};

export default HomeStackScreen;
