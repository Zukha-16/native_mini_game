import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
        <View></View>
      </View>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
