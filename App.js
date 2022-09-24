import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import MainScreen from "./Screens/MainScreen";
import TipContextProvider from "./store/tip-context";

export default function App() {
  return (
    <TipContextProvider>
      <KeyboardAvoidingView
        style={[styles.screen, styles.notchPadding]}
        behavior="height"
      >
        <ScrollView
          style={styles.screen}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <SafeAreaView style={styles.container}>
            <MainScreen />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </TipContextProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  notchPadding: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    color: "white",
  },
});
