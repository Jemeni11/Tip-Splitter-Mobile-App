import { StyleSheet, View } from "react-native";

import { useContext } from "react";
import { TipContext } from "../../store/tip-context";

import TipInput from "./TipInputCard";
import TipSelector from "./TipSelector";
import Colors from "../../constants/Colors";

export default function TipCalculator() {
  const [state, dispatch] = useContext(TipContext);

  function dataSetter(type, data){
    dispatch({type, data})
  }

  return (
    <View style={styles.tipCalculator}>
      <TipInput
        title="Bill"
        value={state.bill}
        setValue={(input) => dataSetter("setBill", input)}
        keyboard="numeric"
      />
      <TipSelector />
      <TipInput
        title="Number of People"
        value={state.numberOfPeople}
        setValue={(input) => dataSetter("setNumberOfPeople", input)}
        keyboard="number-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tipCalculator: {
    flex: 5,
    padding: "5%",
    paddingBottom: "1%",
    alignItems: "stretch",
    backgroundColor: Colors.neutral.white,
  },
});
