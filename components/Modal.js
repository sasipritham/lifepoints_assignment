import React from "react";
import { View, Pressable } from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  ProgressBar,
  Colors,
} from "react-native-paper";

const NewModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    outerHeight: 100,
    outerWidth: 200,
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Rank Distribution</Text>
        </Modal>
      </Portal>
      <Pressable onPress={() => showModal()}>
        <View>
          <Text>Points 50</Text>
          <ProgressBar progress={0.5} color={Colors.red800} />
        </View>
      </Pressable>
    </Provider>
  );
};

export default NewModal;
