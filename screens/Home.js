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
import { collection, getDocs, query, orderBy } from "firebase/firestore";

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
    const notesRef = collection(db, "notes");
    const timeQuery = query(notesRef, orderBy("creationDate", "desc"));
    await getDocs(timeQuery).then((querySnapshot) => {
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
  }, [modalOpen]);

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

const styles = StyleSheet.create({});

export default Home;
