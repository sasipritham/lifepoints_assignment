import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";

import Header from "../components/Header";
const Cart = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header />
      <Text style={{ marginLeft: 10 }}> Shop</Text>
      <Pressable onPress={() => navigation.navigate("Info")}>
        <View
          style={{
            width: 100,
            height: 100,
            margin: 20,
            borderRadius: 10,
            backgroundColor: "lightgray",
            elevation: 10,
            shadowOffset: { width: 1, height: 1 },
            shadowColor: "#333",
            shadowOpacity: 0.3,
            shadowRadius: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Product 1</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Cart;
