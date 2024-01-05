import { ActivityDto, ActivityScreenProps } from "../../@types/types";
import React from "react";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { usePostEnrollment } from "../../hooks/activity/usePostEnrollment";
import { useAuth } from "../../routes/AuthContext";

const ActivityDetailScreen: React.FC<ActivityScreenProps> = ({ route }) => {
  const details = route?.params?.activity as ActivityDto;
  const {enrollActivityAsync, rest} = usePostEnrollment();
  const {currentGuid} = useAuth();
  console.log(details);
  if (details === undefined) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", gap: 7.5 }}>
      <Text
        style={{
          fontSize: 23,
          marginTop: 7.5,
          padding: 5,
          borderRadius: 18,
          borderWidth: 1,
        }}
      >
        {details.activityName}
      </Text>
      <Text
        style={{
          fontSize: 23,
          marginTop: 7.5,
          padding: 5,
          borderRadius: 18,
          borderWidth: 1,
        }}
      >
        {details.activityGuid}
      </Text>
      <Text
        style={{
          fontSize: 23,
          marginTop: 7.5,
          padding: 5,
          borderRadius: 18,
          borderWidth: 1,
        }}
      >
        {details.activityTypeDescription}
      </Text>
      <Text
        style={{
          fontSize: 23,
          marginTop: 7.5,
          padding: 5,
          borderRadius: 18,
          borderWidth: 1,
        }}
      >
        {details.location}
      </Text>
      <Text
        style={{
          fontSize: 23,
          marginTop: 7.5,
          padding: 5,
          borderRadius: 18,
          borderWidth: 1,
        }}
      >
        {details.friendlyStartDate}
      </Text>
      <Button onPress={() => {enrollActivityAsync({activityGuid: details.activityGuid, userGuid: currentGuid})}} title="Enroll"/>
    </View>
  );
};

export default ActivityDetailScreen;
