import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MainStackNavigator,
  DMCardStackNavigator,
  CartStackNavigator,
  RankingStackNavigator,
} from "./HomeNav";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainStackNavigator} />
        <Tab.Screen name="DigitalMCard" component={DMCardStackNavigator} />
        <Tab.Screen name="Rankings" component={RankingStackNavigator} />
        <Tab.Screen name="Cart" component={CartStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
