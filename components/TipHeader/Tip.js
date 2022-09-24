import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Tip({ children, isActive, onPress }) {
  return (
    <Pressable
      style={[styles.mainContainer, isActive && styles.selectedContainer]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.tip}>{children}</Text>
      </View>
    </Pressable>
  );
}

export function CustomTipInput({ isActive, onChange }) {
  return (
    <Pressable
      style={[
        styles.mainContainer,
        styles.customTipContainer,
        isActive && styles.selectedInput,
      ]}
      onPress={onChange}
    >
      <TextInput
        style={[styles.tip, styles.customTip]}
        keyboardType="numeric"
        placeholder="Custom"
        onChangeText={onChange}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.neutral.veryDarkCyan,
    flex: 1,
    flexBasis: "25%",
    height: 40,
    marginHorizontal: 8,
    marginVertical: 10,
    paddingVertical: 3,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  selectedContainer: {
    backgroundColor: Colors.primary.strongCyan,
    color: Colors.neutral.veryDarkCyan,
  },
  container: {
    flex: 1,
  },
  customTipContainer: {
    backgroundColor: Colors.neutral.veryLightGrayishCyan,
  },
  selectedInput: {
    borderColor: Colors.primary.strongCyan,
    color: Colors.primary.strongCyan,
    borderWidth: 2,
  },
  tip: {
    color: Colors.neutral.white,
    textAlign: "center",
    fontSize: 20,
  },
  customTip: {
    color: Colors.neutral.veryDarkCyan,
    width: "100%",
  },
});
