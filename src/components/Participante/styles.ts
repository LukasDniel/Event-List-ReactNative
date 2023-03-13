import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#223027",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginBottom: 15
  },
  name: {
    color: "#fff",
    fontSize: 20
  },
  btnText: {
    color: "#fff",
    fontSize: 30,
  },
  btnDelete: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#cb2202",
    justifyContent: "center",
    alignItems: "center",
  },
});
