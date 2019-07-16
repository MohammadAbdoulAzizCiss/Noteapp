import { StyleSheet } from "react-native";
export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#e91e63"
  },
  buttonAdd: {
    position: "absolute",
    bottom: 70,
    right: 10,
    width: 75,
    height: 75,
    borderRadius: 50,
    elevation: 12,
    zIndex: 12,
    backgroundColor: "#e91e63",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  footerInputText: {
    flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000"
  },
  headerText: {
    flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff"
  },
  header: {
    top: 0,
    backgroundColor: "#e91e63",
    height: 50,
    width: "100%"
  },
  addButtonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center"
  }
}));
