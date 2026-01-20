import React from "react";
import { Text, View } from "react-native";
import { stylesEcommerce } from "./stylesEcommerce";

const CardProduct = ({ product }) => {
  return (
    <View style={stylesEcommerce.containerCard}>
      <Text>{product.title}</Text>
    </View>
  );
};

export default CardProduct;
