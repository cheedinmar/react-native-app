import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Coins, BackButton } from "../assets/svgs/svg";
import Card from "../components/Card";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function Investment({
  navigation,
}: RootStackScreenProps<"Investment">) {
  const data = [{ item: "one" }, { item: "two" }, { item: "three" }];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.header}>Family Plus Investments</Text>
        <Card title="$4,500.00" amount="Total Balance" >
          {" "}
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: "center",
    fontFamily: "Mulish_500Medium",
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.16500000655651093,
	marginVertical:20
  },
});
