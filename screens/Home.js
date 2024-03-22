import React, { useState, useEffect } from "react";
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
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebaseConfig";
import { globalStyles } from "../styles/global";

import NotesForm from "../components/NotesForm";
import Card from "../shared/components/Card";

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [allNotes, setAllNotes] = useState([]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const fetchPost = async () => {
    await getDocs(collection(db, "notes")).then((querySnapshot) => {
      setAllNotes(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
                onPress={closeModal}
                style={styles.modalCloseBtn}
              />
            </View>
            <NotesForm closeModal={closeModal} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <FlatList
        data={allNotes}
        numColumns={2}
        key={2}
        contentContainerStyle={{ gap: 5 }}
        columnWrapperStyle={{ gap: 20 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Notes Details", item)}
          >
            <Card
              title={item.noteTitle}
              paragraph={item.noteBody}
              date={item.creationDate}
            />
          </TouchableOpacity>
        )}
      />
      <AntDesign
        name="pluscircle"
        size={24}
        color="#006d77"
        onPress={openModal}
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
