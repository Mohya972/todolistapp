import React from "react";
import { Text, View } from "react-native";

const CardProduct = ({ product }) => {
  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  );
};

export default CardProduct;
