import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Index = () => {
  const [email, setEmail] = useState("dummy@gmail.com");
  const [password, setPassword] = useState("Password");
  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text>Forgot Password</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>

      <Text>Don't have an Account? Create one</Text>
    </View>
  );
};

export default Index;
