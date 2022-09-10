import { FC } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type HeaderType = {
  inputValue: string;
  setInputValue: (text: string) => any;
  handlePress: () => any;
};

const Header: FC<HeaderType> = ({ inputValue, setInputValue, handlePress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder="Input your name"
        onChangeText={(text) => setInputValue(text)}
      />
      <Button onPress={handlePress} title="Add item" />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Header;
