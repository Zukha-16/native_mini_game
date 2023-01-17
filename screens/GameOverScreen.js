import { View, StyleSheet, Image, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GameOverScreen</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={props.onStartNewGame}>
        Start new game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    color: "white",
    fontSize: 24,
    fontFamily: "ageo_light",
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary700,
  },
});
