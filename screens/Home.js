import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";

import NotesForm from "../components/NotesForm";

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <View style={styles.formHeader}>
              <Text style={[globalStyles.header, styles.formTitle]}>
                Create New Note
              </Text>
              <AntDesign
                name="closecircle"
                size={28}
                color="#006d77"
                onPress={handleModal}
                style={styles.modalCloseBtn}
              />
            </View>
            <NotesForm />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <AntDesign
        name="pluscircle"
        size={24}
        color="#006d77"
        onPress={handleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#edf6f9",
  },
  formHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 26,
  },
});

export default Home;
