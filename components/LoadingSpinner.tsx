import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet, View, Text } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";

interface LoadingSpinnerProps {
  text: string | undefined;
  hideSpinner: boolean;
}

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text }) => {
  const sv = useSharedValue(0);

  React.useEffect(() => {
    // highlight-next-line
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Animated.View style={[styles.box, animatedStyle]}>
        <IonIcons size={100} style={styles.icon} name="basketball" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 100,
    width: 100,
    color: "gray",
    display: "flex",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: 50,
  },
  box: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
});

export default LoadingSpinner;
