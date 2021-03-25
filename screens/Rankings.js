import React from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Switch } from "react-native-paper";

import Header from "../components/Header";

const Rankings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.ranks}>
        <Text>Ranking</Text>
        <View style={styles.switch}>
          <Text>Monthly</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Text>Yearly</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text>1</Text>
        <View style={styles.cardImg}>
          <Avatar.Icon size={40} icon="account" />
          <View style={styles.cardText}>
            <Text>Dummy name</Text>
            <Text>
              <AntDesign name="star" size={12} color="black" /> 12345
            </Text>
          </View>
        </View>
        <Text>Ranking image</Text>
      </View>
      <View style={styles.card}>
        <Text>2</Text>
        <View style={styles.cardImg}>
          <Avatar.Icon size={40} icon="account" />
          <View style={styles.cardText}>
            <Text>Dummy name 1</Text>
            <Text>
              <AntDesign name="star" size={12} color="black" /> 54321
            </Text>
          </View>
        </View>
        <Text>Ranking image</Text>
      </View>
      <View style={styles.card}>
        <Text>3</Text>
        <View style={styles.cardImg}>
          <Avatar.Icon size={40} icon="account" />
          <View style={styles.cardText}>
            <Text>Dummy name 2</Text>
            <Text>
              <AntDesign name="star" size={12} color="black" /> 78963
            </Text>
          </View>
        </View>
        <Text>Ranking image</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ranks: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  switch: {
    flexDirection: "row",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  cardImg: {
    flexDirection: "row",
  },
  cardText: {
    flexDirection: "column",
    paddingLeft: 20,
  },
});
export default Rankings;
