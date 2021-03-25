import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import HomeProduct from "../screens/HomeProduct";

import DigitalMCard from "../screens/DigitalMCard";
import Rankings from "../screens/Rankings";

import Cart from "../screens/Cart";
import Info from "../screens/cart/info";
import Buy from "../screens/cart/buy";
import Success from "../screens/cart/success";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={HomeProduct} />
    </Stack.Navigator>
  );
};

const DMCardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="DigitalMCard" component={DigitalMCard} />
    </Stack.Navigator>
  );
};
const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Buy" component={Buy} />
      <Stack.Screen
        name="Success"
        component={Success}
        // options={{
        //   headerLeft: (props) => (
        //     <HeaderBackButton
        //       {...props}
        //       onPress={() => {
        //         navigation.navigate("Cart");
        //       }}
        //     />
        //   ),
        // }}
      />
    </Stack.Navigator>
  );
};
const RankingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Rankings" component={Rankings} />
    </Stack.Navigator>
  );
};
export {
  MainStackNavigator,
  DMCardStackNavigator,
  CartStackNavigator,
  RankingStackNavigator,
};
