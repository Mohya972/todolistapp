import React from "react";
import { Image, Text, View } from "react-native";
import { stylesEcommerce } from "./stylesEcommerce";

const CardProduct = ({ product }) => {
  const shortTitle =
    product?.title && product.title.length > 20
      ? product.title.slice(0, 20) + "..."
      : (product?.title ?? "");

  return (
    <View style={stylesEcommerce.containerCard}>
      <Image source={{ uri: product?.image }} style={stylesEcommerce.imgCard} />

      <View style={stylesEcommerce.mainCard}>
        <Text>{shortTitle}</Text>
        <Text> {product.price}€ </Text>
      </View>
    </View>
  );
};

export default CardProduct;
