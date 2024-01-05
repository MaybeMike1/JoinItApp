import { CardProps } from "../@types/types";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Card: React.FC<CardProps> = (props) => {
    console.log(props.T)
  return (
    <View style={styles.card}>
        <Image style={styles.cardImage} source={{uri: "https://cdn.discordapp.com/attachments/882160259806945300/1186384611928981534/avatar-neytiri-paryk-til-kvinder.png?ex=65930dc5&is=658098c5&hm=13302d23314cc55e015de6b2e2bbfd947bd5d50282adf765d0b7a7a10a2bf403&"}}/>
      <Text style={styles.cardText}></Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 250,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  cardImage: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10
  },
  cardText: {
    padding: 10,
    fontSize: 18,
  },
});
