import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";
import Header from "./components/Header";
import Item from "./components/Item";
import type { ItemType } from "./types";

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
      <Header
        inputValue={inputValue}
        handlePress={handlePress}
        setInputValue={setInputValue}
      />
      <View style={styles.constinerList}>
        <FlatList data={list} renderItem={renderList}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  constinerList: {
    width: "100%",
    marginTop: 20,
  },
});
