import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ListRenderItem,
  NativeSyntheticEvent,
  TextInputTextInputEventData,
} from "react-native";

type ItemType = {
  id: number;
  title: string;
};

export default function App() {
  const [list, setList] = useState<ItemType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handlePress = () => {
    setList((prevValue) => [
      ...prevValue,
      {
        id: +new Date(),
        title: inputValue,
      },
    ]);

    setInputValue("");
  };

  const handleDeleteItem = (id: number) => {
    const selectedIndex = list.findIndex((i) => i.id === id);
    const copyList = [...list];
    copyList.splice(selectedIndex, 1);
    setList(copyList);
  };

  const renderList: ListRenderItem<ItemType> = ({ item }) => {
    return <Item onClose={() => handleDeleteItem(item.id)} {...item} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          placeholder="Input your name"
          onChangeText={(text) => setInputValue(text)}
        />
        <Button onPress={handlePress} title="Add item" />
      </View>

      <View style={styles.constinerList}>
        <FlatList data={list} renderItem={renderList}></FlatList>
      </View>
    </View>
  );
}

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

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 12,
    flex: 1,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
  },
  constinerList: {
    width: "100%",
    marginTop: 20,
  },
});
