import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator as TabNavigation } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/auth/LoginScreen";
import { useAuth } from "./AuthContext";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ProtectedScreen from "../screens/profile/ProtectedScreen";
import IonIcons from "@expo/vector-icons/Ionicons";
import ActivityScreen from "../screens/activity/ActivityScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityDto } from "../@types/types";
import ActivityDetailScreen from "../screens/activity/ActivityDetailScreen";
import HomeStackScreen from "../screens/HomeStackScreen";

const Tab = TabNavigation();
const Stack = createStackNavigator();

type RootStackParamList = {
  // other routes...
  ActivityDetail: { activity: ActivityDto };
};

const RootStack = createStackNavigator<RootStackParamList>();

function Navigation() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{ tabBarStyle: { backgroundColor: "#03045e" } }}
        >
          <Tab.Screen
            name="Login"
            options={{
              title: "Hop ind",
              headerShown: false,
              tabBarIcon: (props) => {
                return (
                  <IonIcons
                    name="log-in"
                    size={props.size}
                    color={props.color}
                    focused={props.focused}
                  />
                );
              },
            }}
            component={LoginScreen}
          />
          <Tab.Screen
            name="Register"
            options={{
              title: "Meld dig til",
              headerShown: false,
              tabBarIcon: (props) => {
                return (
                  <IonIcons
                    name="arrow-down"
                    size={props.size}
                    color={props.color}
                    focused={props.focused}
                  />
                );
              },
            }}
            component={RegisterScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false
          }}
          component={HomeStackScreen}
        />
        <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
