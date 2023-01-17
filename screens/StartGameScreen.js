import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsContainer from "../components/ui/ButtonsContainer";

const StartGameScreen = ({ onPickedNumber }) => {
  const [entredNumber, setEntredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEntredNumber(enteredText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEntredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(entredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
    resetInputHandler();
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          placeholder="0"
          autoCorrect={false}
          placeholderTextColor={Colors.accent500}
          value={entredNumber}
          onChangeText={numberInputHandler}
        />
        <ButtonsContainer
          leftBtnText="Reset"
          rightBtnText="Confirm"
          leftBtnFunc={resetInputHandler}
          rightBtnFunc={confirmInputHandler}
        />
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
