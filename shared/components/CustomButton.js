import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { globalStyles } from "../../styles/global";

const CustomButton = ({ buttonName, handlePress }) => {
  return (
    <TouchableOpacity>
      <View style={styles.formButton}>
        <Text style={[globalStyles.header, styles.buttonText]}>
          {buttonName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  formButton: {
    backgroundColor: "#006d77",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default CustomButton;
