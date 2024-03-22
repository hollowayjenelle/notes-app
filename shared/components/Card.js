import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { convertTimeStampToDate } from "../utils/convertDate";

const Card = ({ title, paragraph, date }) => {
  const [noteDate, noteTime] = convertTimeStampToDate(date);
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text>{`${paragraph.substring(0, 15)}...`}</Text>
      <Text>{noteDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#83c5be",
    padding: 20,
  },
});

export default Card;
