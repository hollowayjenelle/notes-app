import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingLeft: 5,
  },
  header: {
    fontFamily: "poppins-semibold",
  },
  paragraphs: {
    fontFamily: "poppins-regular",
  },
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
