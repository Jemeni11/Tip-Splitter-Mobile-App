import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";

import Tip, { CustomTipInput } from "./Tip";
import { TipContext } from "../../store/tip-context";

export default function TipSelector() {
  const [state, dispatch] = useContext(TipContext);

  return (
    <View style={styles.tipSelector}>
      <Text style={styles.title}>Select Tip %</Text>
      <View style={styles.tipContainer}>
        <Tip
          isActive={state.tip === 5}
          onPress={() => dispatch({ type: "setTip", data: 5 })}
        >
          5%
        </Tip>
        <Tip
          isActive={state.tip === 10}
          onPress={() => dispatch({ type: "setTip", data: 10 })}
        >
          10%
        </Tip>
        <Tip
          isActive={state.tip === 15}
          onPress={() => dispatch({ type: "setTip", data: 15 })}
        >
          15%
        </Tip>
        <Tip
          isActive={state.tip === 25}
          onPress={() => dispatch({ type: "setTip", data: 25 })}
        >
          25%
        </Tip>
        <Tip
          isActive={state.tip === 50}
          onPress={() => dispatch({ type: "setTip", data: 50 })}
        >
          50%
        </Tip>
        <CustomTipInput
          value={state.tip}
          isActive={typeof state.tip === "string"}
          onChange={(input) => dispatch({ type: "setTip", data: `${input}` })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tipSelector: {
    flex: 2,
    marginHorizontal: 2,
  },
  title: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: "center",
  },
  tipContainer: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
