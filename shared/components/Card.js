import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { convertTimeStampToDate } from "../utils/convertDate";
import { globalStyles } from "../../styles/global";

const Card = ({ title, paragraph, date }) => {
  const [noteDate, noteTime] = convertTimeStampToDate(date);
  const noteBody =
    paragraph.length > 90 ? `${paragraph.substring(0, 90)}...` : paragraph;
  return (
    <View style={styles.card}>
      <Text style={[globalStyles.header, styles.titleTxt]}>{title}</Text>
      <Text style={[globalStyles.paragraphs]}>{noteDate}</Text>
      <Text style={[globalStyles.paragraphs, styles.bodyTxt]}>{noteBody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#83c5be",
    padding: 20,
    height: 220,
    width: 175,
    borderRadius: 10,
    margin: 5,
  },
  bodyTxt: {
    marginTop: 15,
  },
  titleTxt: {
    fontSize: 22,
  },
});

export default Card;
