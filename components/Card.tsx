import { StyleSheet, Pressable, Image } from 'react-native';
import { Eclipse, Eclipse2 } from "../assets/svgs/svg";
import { Text, View } from '../components/Themed';

interface IProps{
	title:string;
	amount:string
}
export default function Card(props: IProps) {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#7F18D0", position: "absolute" }}>
        <Eclipse />
      </View>
      <View
        style={{
          backgroundColor: "transparent",
          alignItems: "center",
		  display:'flex'
        }}
      >
        <Text style={styles.header}>{props.title}</Text>
        <Text style={styles.amount}>{props.amount}</Text>
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
		height: 173,
		width: 326,
		backgroundColor: '#7F18D0',
		borderRadius: 6,
		marginBottom: 17,
	},
	header: {
		fontSize: 40,
		fontWeight: 'bold',
		fontFamily: 'Mulish_700Bold',
		color: 'white',
	},

	amount: {
		fontFamily: 'Mulish_400Regular',
		color: '#98D4F9',
		paddingTop: 5,
		fontSize: 13,
	},
});
