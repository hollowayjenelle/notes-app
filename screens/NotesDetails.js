import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalStyles } from "../styles/global";

const NotesDetails = ({ route }) => {
  const { noteTitle, noteBody, creationDate } = route.params;
  const firebaseTime = new Date(
    creationDate.seconds * 1000 + creationDate.nanoseconds / 1000000
  );
  const noteDate = firebaseTime.toDateString();
  const noteTime = firebaseTime.toLocaleTimeString();
  return (
    <View>
      <Text>{noteTitle}</Text>
      <Text>{noteBody}</Text>
      <Text>{`Last Updated: ${noteDate} at ${noteTime}`}</Text>
    </View>
  );
};

export default NotesDetails;
