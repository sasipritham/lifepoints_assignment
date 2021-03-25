import React from "react";
import { View, Text, Button } from "react-native";

import Header from "../../components/Header";
const Info = ({ navigation }) => {
  return (
    <View>
      <Header />
      <Text style={{ marginLeft: 10 }}> Shop</Text>
      <Button onPress={() => navigation.navigate("Buy")} title="Buy Now" />
    </View>
  );
};

export default Info;
