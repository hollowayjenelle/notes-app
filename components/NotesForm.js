import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

import { globalStyles } from "../styles/global";
import CustomButton from "../shared/components/CustomButton";

const NotesForm = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  return (
    <View>
      <TextInput
        value={noteTitle}
        placeholder="Note Title"
        onChangeText={(newText) => setNoteTitle(newText)}
        style={styles.formInput}
      />
      <TextInput
        multiline
        value={noteBody}
        placeholder="Note Body"
        onChangeText={(newText) => setNoteBody(newText)}
        style={styles.formInput}
      />
      <CustomButton buttonName={"Create Note"} />
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    marginBottom: 20,
    borderColor: "#006d77",
    borderWidth: 2,
    padding: 10,
    fontFamily: "poppins-semibold",
  },
});

export default NotesForm;
