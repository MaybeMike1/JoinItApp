import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    gap: 10,
  },
  bannerContainer: {
    backgroundColor: "#2deb30",
    flex: 0.5,
    transform: [{rotate: '45deg'}],
    width: 1000,
    height: 880,
  },
  authenticationContainer: {
    flex: 0.5 ,
    display: "flex",
    height: 880,
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  submitBtn: {
    marginVertical: 25,
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2deb30',
  },
  submitBtnText: {
    fontSize: 18,
    backgroundColor: "#2deb30"
  },
});
