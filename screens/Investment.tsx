import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Coins } from '../assets/svgs/svg';
import Card from '../components/Card';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Investment({ navigation }: RootStackScreenProps<'Investment'>) {
    const data = [
        {item: "one"},
        {item: "two"},
        {item: "three"},

    ]
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Card title="Let"
                amount="Up to ₦500,000"
                type="cash"
               
                width={300}
                height={150}> </Card>
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
