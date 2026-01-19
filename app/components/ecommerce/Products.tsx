import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import CardProduct from "./CardProduct";
import { stylesEcommerce } from "./stylesEcommerce";

const Products = () => {
  // initialisation des variables locales (state)
  const [dataProducts, setDataProducts] = useState([]); // tableau de la liste de produits
  const [loading, setLoading] = useState(true); // état de chargement

  // chargement des données de l'API
  const loadData = async () => {
    // Changement de l'état du chargement
    setLoading(true);

    // requête sur l'API
    const query = await axios.get("https://fakestoreapi.com/products");

    // chargement des données dans la flatlist
    setDataProducts(query.data);

    // fin de chargement
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []); // [] au chargement du composant

  return (
    <View style={stylesEcommerce.container}>
      <Text>Nos Produits</Text>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={dataProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardProduct />}
        />
      )}
    </View>
  );
};

export default Products;
