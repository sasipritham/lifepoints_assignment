import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import Header from "../../components/Header";
const Success = ({ navigation }) => {
  return (
    <View>
      <Header />
      <Text style={{ marginLeft: 10 }}> Shop</Text>

      <Text>Success page</Text>
      <Button
        title="Continue"
        onPress={() => NavigationPreloadManager.navigate("Cart")}
      />
    </View>
  );
};

export default Success;
