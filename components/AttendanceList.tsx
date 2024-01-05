import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AttendanceListProps } from "../@types/types";

const AttendanceList: React.FC<AttendanceListProps> = () => {
  return <FlatList data={[]} renderItem={(e) => <View></View>} />;
};
