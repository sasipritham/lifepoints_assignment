import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, ProgressBar, Colors } from "react-native-paper";

import NewModal from "./Modal";

function Header() {
  return (
    <View style={styles.container}>
      <Avatar.Icon size={50} icon="account" />
      <Text>Dummy User</Text>
      <View>
        <NewModal />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    padding: 20,
  },
});
export default Header;
