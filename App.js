// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// import Login from "./screens/Login";
// export default function App() {
//   return (
//     <SafeAreaView>
//       <Login />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import * as React from "react";
import { Text, View } from "react-native";

import TabNav from "./components/BottomNav";
export default function App() {
  return <TabNav />;
}
