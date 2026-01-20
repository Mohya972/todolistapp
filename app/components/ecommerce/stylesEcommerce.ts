import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const cardWidth = (windowWidth - 20 - 40) / 2;

export const stylesEcommerce = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 40,
  },

  containerCard: {
    backgroundColor: "#ccc",
    margin: 10,
    padding: 5,
    borderRadius: 5,
    width: cardWidth,
  },

  imgCard: {
    width: cardWidth,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  mainCard: {
    padding: 10,
  },
});
