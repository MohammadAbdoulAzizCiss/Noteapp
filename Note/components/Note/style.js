import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  noteText: {
    paddingLeft: 10,
    borderLeftWidth: 10,
    borderLeftColor: "#e91e63"
  },
  deleteNote: {
    position: "absolute",
    top: 10,
    bottom: 10,
    right: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9"
  }
}));
