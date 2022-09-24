import { Pressable, StyleSheet, Text, View } from "react-native";
import TipCard from "./TipCard";
import { useContext } from "react";
import { TipContext } from "../../store/tip-context";
import Colors from "../../constants/Colors";

export default function TipAnswer() {
  const [state, dispatch] = useContext(TipContext);

  function resetHandler() {
    dispatch({ type: "reset" });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TipCard title="Tip Amount" price={state.tipAmount} />
        <TipCard title="Total" price={state.total} />
        <Pressable style={styles.buttonContainerView} onPress={resetHandler}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>RESET</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 4,
    paddingTop: "1%",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.veryDarkCyan,
    borderRadius: 24,
    width: "90%",
    height: "90%",
    alignSelf: "center",
    marginVertical: "5%",
    padding: 14,
  },
  buttonContainerView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: "10%",
  },
  buttonContainer: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: Colors.primary.strongCyan,
  },
  buttonText: {
    fontWeight: "700",
    textAlign: "center",
    color: Colors.neutral.veryDarkCyan,
  },
});
