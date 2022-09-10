import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import type { ItemType } from "../../types";

const Item: FC<ItemType & { onClose: () => any }> = ({ title, onClose }) => {
  return (
    <View style={itemStyles.container}>
      <Text>{title}</Text>
      <Text onPress={onClose}>Close</Text>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Item;
