import { ActivityListProps } from "../@types/types";
import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ActivityList: React.FC<ActivityListProps> = ({
  activityResponseDto,
  isLoading,
}) => {
  if (isLoading) return <ActivityIndicator />;
  return (
    <View>
      <FlatList
        data={activityResponseDto.activities}
        renderItem={({ item }) => (
          <TouchableOpacity style={{flex: 1, alignItems: 'center', backgroundColor: 'lightblue', padding: 20}}>
            <Text style={{fontSize: 25}}>{item.activityName}</Text>
            <Text>{item.friendlyStartDate}</Text>
            <Text>{item.location}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ActivityList;
