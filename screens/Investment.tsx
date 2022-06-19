import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Kids,
  BackButton,
  Stocks,
  FamilyPlus,
  ForwardButton,
  CheckBox,
  FamilyPlusSavings,
  Family,
  RoundUp,
  Withdraw,
} from "../assets/svgs/svg";
import Card from "../components/Card";
import React, { useState, createRef, useEffect, useContext } from "react";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function Investment({
  navigation,
}: RootStackScreenProps<"Investment">) {
  const data = [
    { item: "one" },
    { item: "two" },
    { item: "three" },
    { item: "four" },
  ];
  const [height, setHeight] = useState(0);
  function onContentSizeChange(contentHeight: number) {
    setHeight(contentHeight);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} onContentSizeChange={onContentSizeChange}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <BackButton />
          </TouchableOpacity>
          <Text style={styles.header}>Family Plus Investments</Text>
          <Card title="Total Balance" amount="$4,500.00">
            {" "}
          </Card>
          <View style={styles.paginationDots}>
            {data.length > 1 &&
              data.map((_, i) => <Pressable key={i} style={[styles.dot]} />)}
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginBottom: 15,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <FamilyPlus />
              <Text style={styles.serviceTypes}>FamilyPlus Savings</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Stocks />
              <Text style={styles.serviceTypes}>Invest in Stocks</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Kids />
              <Text style={styles.serviceTypes}>Early for kids</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.subcard}>
              <Text>Portfolio</Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{ marginRight: 3, color: "#7F18D0" }}
                  onPress={() => {
                    navigation.navigate("Portfolio");
                  }}
                >
                  Aggressive
                </Text>
                <ForwardButton />
              </View>
            </View>
            <View style={styles.subcard}>
              <Text>Round-Up Settings</Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={{ marginRight: 3, color: "#7F18D0" }}>
                  Automatic
                </Text>
                <ForwardButton />
              </View>
            </View>
            <View style={styles.subcard}>
              <Text>Recurring</Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={{ marginRight: 3, color: "#7F18D0" }}>
                  $20/Monthly
                </Text>
                <ForwardButton />
              </View>
            </View>
            <View style={styles.subcard}>
              <Text>Beneficiary</Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={{ marginRight: 3, color: "#7F18D0" }}>
                  1 Child
                </Text>
                <ForwardButton />
              </View>
            </View>
            <View style={styles.subcard}>
              <Text>One-time Investment</Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <ForwardButton />
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.subcard}>
              <Text style={{ fontSize: 16 }}>Recent Transactions</Text>
            </View>
            <View style={styles.subcard}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "transparent",
                  alignItems: "center",
                }}
              >
                <CheckBox />
                <View style={{ backgroundColor: "transparent", marginLeft: 8 }}>
                  <Text style={{ color: "#4B4B4B" }}>One Time Investment</Text>
                  <Text style={{ fontSize: 12 }}>Processing</Text>
                </View>
              </View>
              <Text style={{ color: "#4B4B4B", fontSize: 12 }}>$20</Text>
            </View>
            <View style={styles.subcard}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "transparent",
                  alignItems: "center",
                }}
              >
                <CheckBox />
                <View style={{ backgroundColor: "transparent", marginLeft: 8 }}>
                  <Text style={{ color: "#4B4B4B" }}>Withdrawal</Text>
                  <Text style={{ fontSize: 12 }}>Processing</Text>
                </View>
              </View>
              <Text style={{ color: "#4B4B4B", fontSize: 12 }}>$-8.00</Text>
            </View>
            <View style={styles.subcard}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "transparent",
                  alignItems: "center",
                }}
              >
                <CheckBox />
                <View style={{ backgroundColor: "transparent", marginLeft: 8 }}>
                  <Text style={{ color: "#4B4B4B" }}>Round-Up Investment</Text>
                  <Text style={{ fontSize: 12 }}>Processing</Text>
                </View>
              </View>
              <Text style={{ color: "#4B4B4B", fontSize: 12 }}>$10.36</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#7F18D0",
                width: "100%",
                borderRadius: 5,
                height: 50,
                justifyContent: "center",
              }}
              onPress={() => {
                navigation.navigate("Investment");
              }}
            >
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  paddingVertical: 10,
                  fontFamily: "Mulish_700Bold",
                  fontSize: 16,
                }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#EDEEF7",
              paddingVertical: 32,
              height: 471,
              marginVertical: 40,
              width: 327,
            }}
          >
            <View
              style={{
                backgroundColor: "transparent",
                paddingHorizontal: 65,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "#4B4B4B",
                  lineHeight: 29,
                }}
              >
                Hypothetical projection of $12000 at age 16
              </Text>
            </View>
            <View style={styles.subcard}>
              <Text style={styles.returns}>Investment: $550</Text>
              <Text style={styles.returns}>Returns: $12,000</Text>
            </View>
            <View style={{ marginBottom: 100 }}></View>
            <Image source={require("../assets/images/chart.png")} />
          </View>
          <View style={styles.card}>
            <View style={styles.subcard}>
              <Text style={{ fontSize: 16, color: "#4B4B4B" }}>
                Grow your Knowledge
              </Text>
            </View>
            <View style={styles.subcard2}>
              <Family />
              <Text style={[{ marginLeft: 10 }, styles.returns]}>
                What is Family Plus?
              </Text>
            </View>
            <View style={styles.subcard2}>
              <RoundUp />
              <Text style={[{ marginLeft: 10 }, styles.returns]}>
                How do Round-Ups work?
              </Text>
            </View>
            <View style={styles.subcard2}>
              <FamilyPlusSavings />
              <Text style={[{ marginLeft: 10 }, styles.returns]}>
                What is FamilyPlus Savings?
              </Text>
            </View>
            <View style={styles.subcard2}>
              <Withdraw />
              <Text style={[{ marginLeft: 10 }, styles.returns]}>
                How can I withdraw my money?
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    overflow: "scroll",
  },
  header: {
    textAlign: "center",
    fontFamily: "Mulish_500Medium",
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.16500000655651093,
    marginVertical: 20,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    borderWidth: 1,
    marginHorizontal: 4,
  },
  serviceTypes: {
    textAlign: "center",
    color: "#353535",
    fontSize: 12,
    fontFamily: "Mulish_600SemiBold",
    lineHeight: 15,
    paddingTop: 5,
  },
  card: {
    backgroundColor: "#F4F4F4",
    width: 326,
    marginVertical: 18,
  },
  subcard: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingHorizontal: 16,
  },
  subcard2: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 16,
  },
  returns: {
    fontFamily: "Mulish_600SemiBold",
    fontSize: 12,
    color: "#4B4B4B",
  },
});
