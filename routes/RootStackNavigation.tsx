import React, { ReactNode } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ActivityDetailScreen from "../screens/activity/ActivityDetailScreen";
import { ActivityDto } from "../@types/types";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";

type RootStackParamList = {
  // other routes...
  ActivityDetail: { activity: ActivityDto };
};

const RootNavigator: React.FC<{ children: ReactNode }> = ({ children }) => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="ActivityDetail"
          component={ActivityDetailScreen}
        />
        {children}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
