import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { StyleSheet, ScrollView, TextInput } from "react-native";
import { db } from "../firebaseConfig";

import CustomButton from "../shared/components/CustomButton";

const NotesForm = ({ closeModal }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const handleCreate = async () => {
    const newNote = {
      noteTitle: noteTitle,
      noteBody: noteBody,
      creationDate: Timestamp.fromDate(new Date()),
    };
    try {
      const docRef = await addDoc(collection(db, "notes"), newNote);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    closeModal();
  };

  return (
    <ScrollView>
      <TextInput
        value={noteTitle}
        placeholder="Note Title"
        onChangeText={(newText) => setNoteTitle(newText)}
        style={styles.formInput}
      />
      <TextInput
        multiline
        numberOfLines={10}
        value={noteBody}
        placeholder="Note Body"
        onChangeText={(newText) => setNoteBody(newText)}
        style={[styles.formInput, styles.multilineInput]}
      />
      <CustomButton buttonName={"Create Note"} handlePress={handleCreate} />
    </ScrollView>
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
  multilineInput: {
    textAlignVertical: "top",
  },
});

export default NotesForm;
