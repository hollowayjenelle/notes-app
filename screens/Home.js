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

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <AntDesign
              name="closecircle"
              size={24}
              color="#006d77"
              onPress={handleModal}
            />
            <Text>Test Modal</Text>
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

export default Home;
