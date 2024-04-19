import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";
import { convertTimeStampToDate } from "../shared/utils/convertDate";

const NotesDetails = ({ route }) => {
  const { noteTitle, noteBody, creationDate } = route.params;
  const [noteDate, noteTime] = convertTimeStampToDate(creationDate);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContainer}>
            <View style={globalStyles.formHeader}>
              <Text style={[globalStyles.header, globalStyles.formTitle]}>
                Create New Note
              </Text>
              <AntDesign
                name="closecircle"
                size={28}
                color="#006d77"
                onPress={closeModal}
                style={globalStyles.modalCloseBtn}
              />
            </View>
            {/* <NotesForm closeModal={closeModal} /> */}
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.detailsHeader}>
        <Text style={[globalStyles.header, styles.noteHeader]}>
          {noteTitle}
        </Text>
        <AntDesign
          name="edit"
          size={28}
          color="#006d77"
          style={styles.editButton}
          onPress={openModal}
        />
      </View>
      <Text
        style={styles.timeText}
      >{`Last Updated: ${noteDate} at ${noteTime}`}</Text>
      <View style={styles.divider} />
      <Text style={[globalStyles.paragraphs, styles.noteText]}>{noteBody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteHeader: {
    fontSize: 32,
    marginLeft: 10,
  },
  detailsHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  editButton: {
    marginRight: 20,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  timeText: {
    marginBottom: 10,
    marginLeft: 10,
  },
  noteText: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default NotesDetails;
