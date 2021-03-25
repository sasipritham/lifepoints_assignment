import React, { useState, useCallback, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  DrawerLayoutAndroidComponent,
} from "react-native";

import Carousel from "react-native-snap-carousel";

import Header from "../components/Header";

const exampleItems = [
  {
    title: "Item 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Item 2",
    text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Item 3",
    text: "Ut enim ad minim veniam",
  },
];

const Home = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => (
      <Pressable onPress={() => navigation.navigate("Product")}>
        <View
          style={{
            backgroundColor: "floralwhite",
            borderRadius: 25,
            elevation: 4,
            shadowOffset: { width: 1, height: 1 },
            shadowColor: "#333",
            shadowOpacity: 0.3,
            shadowRadius: 2,
            height: 500,
            padding: 50,
            marginLeft: 25,
            marginRight: 25,
            justifyContent: "flex-end",
          }}
        >
          <View>
            <Text style={{ fontSize: 30, color: "black" }}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
        </View>
      </Pressable>
    ),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <Header />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 30,
        }}
      >
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
