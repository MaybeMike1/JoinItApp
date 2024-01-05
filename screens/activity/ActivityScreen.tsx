import { useGetActivity } from "../../hooks/activity/useGetActivity";
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from "react-native";
import { useAuth } from "../../routes/AuthContext";
import { StyleSheet } from "react-native";
import { ActivityDto, ActivityScreenProps } from "../../@types/types";

interface Activity {
  activity: ActivityDto;
}
const Item: React.FC<Activity> = ({ activity }) => {
  console.log(activity);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{activity.activityName}</Text>
      <Text style={styles.title}>{activity.location}</Text>
    </View>
  );
};

const ActivityScreen: React.FC<ActivityScreenProps> = ({ navigation }) => {
  //const auth = useAuth();
  const { data, isLoading } = useGetActivity();
  console.log(data);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data.activities}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("ActivityDetail", {activity : item})}>
              <Item activity={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#0096FF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 19,
    color: "black",
    textAlign: "center",
  },
});

export default ActivityScreen;
