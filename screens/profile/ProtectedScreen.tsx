import { useRoute } from "@react-navigation/native";
import { useMember } from "../../hooks/auth/useMember";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "../../routes/AuthContext";
import useAsyncStorage from "../../utils/useAsyncStorage";
import { ProfileScreenProps } from "../../@types/types";
import ActivityList from "../../components/ActivityList";
import { useGetUserActivities } from "../../hooks/activity/useGetUserActivity";
import Card from "../../components/Card";

interface ProtectedScreenProps {}
const ProtectedScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const route = useRoute();

  const { currentJwtToken, currentGuid, isAuthenticated, currentUser, logout } =
    useAuth();
  // if(isAuthenticated) {
  //   return(
  //   <View>
  //     <Image source={{uri: currentUser.picture.data.url}} style={{width: 200, height: 200}}/>
  //     <Text>{currentUser.name}</Text>
  //     <Text>{currentUser.id}</Text>
  //     <TouchableOpacity onPress={() => navigation.navigate("ActivityDetail")}>
  //       <Text>Test Push</Text>
  //     </TouchableOpacity>
  //   </View>
  //   )
  if (currentJwtToken && currentGuid) {
    const { data, isLoading } = useMember(currentGuid);
    const { data: userActivitiesData, isLoading: isUserActivitiesLoading } =
      useGetUserActivities(currentGuid);
    if (isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <View
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Card T={data} isLoading={isLoading} />
        </View>
        <View
          style={{
            flex: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 8 },
            elevation: 17,
            shadowOpacity: 1.44,
            shadowRadius: 10.32,
            backgroundColor: "white",
          }}
        >
          <Text>adasd</Text>
          <Text>adasd</Text>
          <Text>adasd</Text>
          <Text>adasd</Text>
          <Text>adasd</Text>
          <Text>adasd</Text>
        </View>
        <View>
          <ActivityList
            isLoading={isUserActivitiesLoading}
            activityResponseDto={userActivitiesData}
          />
        </View>
        <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Test</Text>
     
    </View>
  );
};

export default ProtectedScreen;
