import { StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import { Eclipse, Eclipse2 } from "../assets/svgs/svg";
import { Text, View } from '../components/Themed';

interface IProps{
	title:string
	amount:string
}
export default function Card(props: IProps,) {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#7F18D0", position: "absolute" }}>
        <Eclipse />
      </View>
      <View
        style={{
          backgroundColor: "transparent",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={styles.header}>{props.amount}</Text>
        <Text style={styles.amount}>{props.title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderRadius: 5,
              justifyContent: "center",
              marginRight: 20,
            }}
          >
            <Text
              style={{
                color: "#4B4B4B",
                alignSelf: "center",
                padding: 10,
                fontFamily: "Mulish_700Bold",
                fontSize: 16,
              }}
            >
              Add Money
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderRadius: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#4B4B4B",
                alignSelf: "center",
                padding: 10,
                fontFamily: "Mulish_700Bold",
                fontSize: 16,
              }}
            >
              withdraw
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <Eclipse2 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		height: 190,
		width: 326,
		backgroundColor: '#7F18D0',
		borderRadius: 6,
		zIndex:100
	},
	header: {
		fontSize: 40,
		fontWeight: 'bold',
		fontFamily: 'Mulish_700Bold',
		color: 'white',
	},

	amount: {
		fontFamily: 'Mulish_600SemiBold',
		color: '#fff',
		paddingTop: 5,
		fontSize: 16,
		marginBottom:19
	},
});
