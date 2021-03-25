import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Header from "../components/Header";

const DigitalMCard = () => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Text style={{ paddingLeft: 10 }}>Digital Member Card</Text>
        <AntDesign
          name="qrcode"
          size={150}
          color="black"
          style={{
            alignSelf: "center",
            justifyContent: "center",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DigitalMCard;
