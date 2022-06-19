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
  Percentage,
} from "../assets/svgs/svg";
import Card from "../components/Card";
import React, { useState, createRef, useEffect, useContext } from "react";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function PortFolio({
  navigation,
}: RootStackScreenProps<"Investment">) {
  const data = [
    { item: "one" },
    { item: "two" },
    { item: "three" },
    { item: "four" },
    {item:'five'}
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
              navigation.navigate("Investment");
            }}
          >
            <BackButton />
          </TouchableOpacity>

          <Text style={styles.header}>Aggressive Portfolio</Text>
          <View style={styles.paginationDots}>
            {data.length > 1 &&
              data.map((_, i) => <Pressable key={i} style={[styles.dot]} />)}
          </View>
          <View
            style={{
              alignItems: "center",
              height: 360,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                right: 0,
                top: 60,
                zIndex: 100,
                backgroundColor: "transparent",
              }}
            >
              <Text style={{ fontSize: 10 }}>International Company </Text>
              <Text style={{ fontSize: 10 }}>Stocks</Text>
            </View>
            <View
              style={{
                position: "absolute",
                left: -10,
                top: 150,
                zIndex: 100,
                backgroundColor: "transparent",
              }}
            >
              <Text style={{ fontSize: 10 }}>Medium Company </Text>
              <Text style={{ fontSize: 10 }}>stocks (IJH)</Text>
            </View>
            <View
              style={{
                position: "absolute",
                right: 0,
                zIndex: 100,
                backgroundColor: "transparent",
              }}
            >
              <Text style={{ fontSize: 10 }}>Small Company </Text>
              <Text style={{ fontSize: 10 }}>Stocks (IJR)</Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 60,
                zIndex: 100,
                backgroundColor: "transparent",
              }}
            >
              <Text style={{ fontSize: 10 }}>Large Company </Text>
              <Text style={{ fontSize: 10 }}>Stocks (NOO)</Text>
            </View>
            <Image source={require("../assets/images/pieChart.png")} />
          </View>
          <View
            style={[
              styles.card,
              {
                width: 174,
                borderRadius: 6,
                padding: 12,
                backgroundColor: "#F8F8F8",
              },
            ]}
          >
            <Text style={{ fontSize: 14, lineHeight: 21, color: "#4B4B4B" }}>
              Prospective Outcome
            </Text>
            <Text style={{ fontSize: 12, lineHeight: 18, color: "#4B4B4B" }}>
              Risk:6
            </Text>
            <Text style={{ fontSize: 12, lineHeight: 18, color: "#4B4B4B" }}>
              Returns 10-15%
            </Text>
          </View>
          <View style={styles.card}>
            <View style={styles.subcard}>
              <Text>Large Company Stocks(VOO)</Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Percentage />
                <View style={{ marginRight: 15 }}></View>
                <ForwardButton />
              </View>
            </View>
            <View style={styles.subcard}>
              <Text>Medium Company Stocks (IJH)</Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Percentage />
                <View style={{ marginRight: 15 }}></View>
                <ForwardButton />
              </View>
            </View>
            <View style={styles.subcard}>
              <Text>Small Company Stocks(IJR)</Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Percentage />
                <View style={{ marginRight: 15 }}></View>
                <ForwardButton />
              </View>
            </View>
            <View style={styles.subcard}>
              <Text>International Company Stocks (IXUS) </Text>
              <View
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Percentage />
                <View style={{ marginRight: 15 }}></View>
                <ForwardButton />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#C2C7FF",
              width: "100%",
              borderRadius: 5,
              height: 50,
              justifyContent: "center",
              marginBottom: 50,
            }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                color: "#4B4B4B",
                alignSelf: "center",
                paddingVertical: 10,
                fontFamily: "Mulish_700Bold",
                fontSize: 16,
              }}
            >
              This portfolio is selected
            </Text>
          </TouchableOpacity>
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
    fontFamily: "Mulish_700Bold",
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: -1,
    marginVertical: 20,
    color: "#080D45",
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
    width: 15,
    height: 15,
    borderRadius: 150,
    borderWidth: 1,
    marginHorizontal: 4,
    borderColor: "#1826D0",
  },
  card: {
    backgroundColor: "#fff",
    width: 326,
    marginVertical: 18,
  },
  subcard: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 16,
    marginVertical: 3,
  },
});
