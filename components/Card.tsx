import { StyleSheet, Pressable, Image } from 'react-native';
import { Eclipse } from '../assets/svgs/svg';
import { Text, View } from '../components/Themed';


export default function Card({
 
  height,
  width,
  title,
  amount,
 
}) { 

  return (
    <View style={styles.container}>
      

	  <Eclipse />
     
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
      <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
       
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		height: 150,
		width: '100%',
		backgroundColor: '#7F18D0',
		borderRadius: 5,
		marginBottom: 17,
		padding: 10,
		paddingLeft: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		fontFamily: 'Mulish_400Regular',
		color: 'white',
	},
	leaf: {
		position: 'absolute',
		right: 0,
	},
	amount: {
		fontFamily: 'Mulish_400Regular',
		color: '#98D4F9',
		paddingTop: 5,
		fontSize: 13,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 26,
		borderColor: '#074A74',
		borderWidth: 1,
		borderRadius: 10,
		width: 130,
		
		height:40,
	},
	button: {
		flex: 1,
		paddingVertical: 4,
		marginHorizontal: 8,
		borderRadius: 24,
	},
	buttonText: {
		color: '#ffffff',
		fontWeight: 'normal',
		textAlign: 'center',
		fontSize: 18,
	},
});
