import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function TipCard({ title, price }) {
  return (
    <View style={styles.tipCard}>
      <View style={styles.tipLeftSide}>
        <Text style={styles.tipTitle}>{title}</Text>
        <Text style={styles.tipSubTitle}>/ person</Text>
      </View>
      <Text style={styles.tipTotal}>
        {price === "$NaN"
          ? "$0.00"
          : price === "$Infinity"
          ? "Infinity"
          : price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tipCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  tipLeftSide: {
    textAlign: "left",
  },
  tipTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.neutral.white,
  },
  tipSubTitle: {
    fontSize: 16,
    color: Colors.neutral.grayishCyan,
  },
  tipTotal: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.primary.strongCyan,
  },
});
