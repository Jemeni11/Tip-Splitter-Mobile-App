import { StyleSheet, View } from "react-native";
import { useContext, useEffect } from "react";
import Colors from "../constants/Colors";
import TipCalculator from "../components/TipHeader/TipCalculator";
import TipAnswer from "../components/TipFooter/TipAnswer";
import TipCalculations from "../Logic/TipCalculations";
import { TipContext } from "../store/tip-context";

export default function MainScreen() {
  const [state, dispatch] = useContext(TipContext);

  useEffect(() => {
    const [tipAmountPerPerson, totalAmountPerPerson] = TipCalculations(
      state.bill,
      state.tip,
      state.numberOfPeople
    );
    dispatch({ type: "setTipAmount", data: tipAmountPerPerson });
    dispatch({ type: "setTotal", data: totalAmountPerPerson });
  }, [state.bill, state.tip, state.numberOfPeople]);

  return (
    <View style={styles.main}>
      <TipCalculator />
      <TipAnswer />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
});
