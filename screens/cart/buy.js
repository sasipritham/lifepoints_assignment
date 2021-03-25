import React from "react";
import { View, Text, Button } from "react-native";

import Header from "../../components/Header";

const Buy = ({ navigation }) => {
  return (
    <View>
      <Header />
      <Text style={{ marginLeft: 10 }}> Shop</Text>

      <Button title="Continue" onPress={() => navigation.navigate("Success")} />
    </View>
  );
};

export default Buy;
