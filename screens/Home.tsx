import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Coins } from '../assets/svgs/svg';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
    const data = [
        {item: "one"},
        {item: "two"},
        {item: "three"},

    ]
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Coins />
				<Text style={styles.text}>
					3KLE invests your money intelligently in stocks
				</Text>
				<Text style={styles.textSupport}>
					Build, preserve and manage your family wealth with stocks investment
				</Text>
                <View style={styles.paginationDots}>
					{data.length > 1 &&
						data.map((_, i) => (
							<Pressable
								key={i}
								style={[
									styles.dot,
									
								]}
								
							/>
						))}
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: '#7F18D0',
                        width: "100%",
                        borderRadius: 5
					}}
					onPress={() =>{navigation.navigate('Investment')} }
				>
					<Text
						style={{
							color: 'white',
                            alignSelf: 'center',
                            paddingVertical: 10,
                            fontFamily: 'Mulish_700Bold',
                            fontSize: 16
						}}
					>
						Get Started
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 100,
        paddingHorizontal: 20
	},
	text: {
		fontFamily: 'Mulish_700Bold',
		fontSize: 24,
		color: '#080D45',
		fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10

	},
	textSupport: {
		fontFamily: 'Mulish_400Regular',
        paddingHorizontal: 50,
        textAlign: 'center',
		fontSize: 14,
		color: '#333333',
        marginVertical: 20

	},
    paginationDots: {
		height: 16,
		margin: 16,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
        paddingBottom: 10
	},
	dot: {
		width: 5,
		height: 5,
		borderRadius: 50,
        borderColor: '#074A74',
        borderWidth: 1,

		marginHorizontal: 4,
	},
    
});
