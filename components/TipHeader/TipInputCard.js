import { StyleSheet, Text, View, TextInput } from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons, Foundation } from "@expo/vector-icons";

export default function TipInput({ title, value, setValue, keyboard }) {
  return (
    <View style={styles.inputStyle}>
      <View style={styles.tipInputText}>
        <Text style={styles.bigFont}>{title}</Text>
        {+value === 0 && (
          <Text style={[styles.error, styles.bigFont]}>Can't be zero</Text>
        )}
      </View>
      <View style={[styles.textSection, +value === 0 && styles.errorBorder]}>
        {title === "Bill" ? (
          <Ionicons
            style={styles.icon}
            name="md-person-outline"
            size={24}
            color="grey"
          />
        ) : (
          <Foundation
            style={styles.icon}
            name="dollar"
            size={24}
            color="grey"
          />
        )}
        <TextInput
          style={[styles.numberInput]}
          autoCorrect={false}
          keyboardType={keyboard}
          placeholder="0"
          value={`${value}`}
          onChangeText={(enteredText) => setValue(enteredText)}
          placeholderTextColor={Colors.neutral.lightGrayishCyan}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    padding: 4,
    marginVertical: 4,
  },
  tipInputText: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  bigFont: {
    fontSize: 16,
  },
  error: {
    color: "#FF0000",
  },
  errorBorder: {
    borderColor: "#FF0000",
    borderWidth: 2,
  },
  numberInput: {
    fontSize: 24,
    fontWeight: "700",
    backgroundColor: Colors.neutral.grayish,
    color: Colors.neutral.veryDarkCyan,
    textAlign: "right",
    flex: 1,
    paddingVertical: 6,
    paddingRight: 6,
    paddingLeft: 0,
  },
  icon: {
    paddingVertical: 6,
    paddingRight: 6,
    paddingLeft: 12,
  },
  textSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.neutral.grayish,
    borderRadius: 8,
    marginVertical: 8,
  },
});
