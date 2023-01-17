import { View, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

const ButtonsContainer = (props) => {
  const { leftBtnText, rightBtnText, leftBtnFunc, rightBtnFunc } = props;
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={leftBtnFunc}>{leftBtnText}</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={rightBtnFunc}>{rightBtnText}</PrimaryButton>
      </View>
    </View>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 24,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
