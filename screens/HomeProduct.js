import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const HomeProduct = () => {
  const [up, setUp] = useState("grey");
  const [down, setDown] = useState("grey");
  function handleUpPress() {
    up == "grey" ? setUp("lightgreen") : setUp("grey");
    setDown("grey");
  }
  function handleDownPress() {
    down == "grey" ? setDown("red") : setDown("grey");
    setUp("grey");
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text style={{ marginBottom: 10, fontWeight: "800", fontSize: 30 }}>
          Product 1
        </Text>
        <Text style={{ marginBottom: 10, fontWeight: "200", fontSize: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit .Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </Text>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Entypo
            name="thumbs-up"
            style={{ marginRight: 20 }}
            size={40}
            color={up}
            onPress={() => handleUpPress()}
          />
          <Entypo
            name="thumbs-down"
            size={40}
            color={down}
            onPress={() => handleDownPress()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeProduct;
