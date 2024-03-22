import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalStyles } from "../styles/global";
import { convertTimeStampToDate } from "../shared/utils/convertDate";

const NotesDetails = ({ route }) => {
  const { noteTitle, noteBody, creationDate } = route.params;
  const [noteDate, noteTime] = convertTimeStampToDate(creationDate);
  return (
    <View>
      <Text>{noteTitle}</Text>
      <Text>{noteBody}</Text>
      <Text>{`Last Updated: ${noteDate} at ${noteTime}`}</Text>
    </View>
  );
};

export default NotesDetails;
