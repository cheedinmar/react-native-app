import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./navigation";

import AppLoading from "expo-app-loading";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	useFonts,
	Mulish_200ExtraLight,
	Mulish_300Light,
	Mulish_400Regular,
	Mulish_500Medium,
	Mulish_600SemiBold,
	Mulish_700Bold,
	Mulish_800ExtraBold,
	Mulish_900Black,
	Mulish_200ExtraLight_Italic,
	Mulish_300Light_Italic,
	Mulish_400Regular_Italic,
	Mulish_500Medium_Italic,
	Mulish_600SemiBold_Italic,
	Mulish_700Bold_Italic,
	Mulish_800ExtraBold_Italic,
	Mulish_900Black_Italic,
} from '@expo-google-fonts/mulish';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	let [fontsLoaded] = useFonts({
		Mulish_200ExtraLight,
		Mulish_300Light,
		Mulish_400Regular,
		Mulish_500Medium,
		Mulish_600SemiBold,
		Mulish_700Bold,
		Mulish_800ExtraBold,
		Mulish_900Black,
		Mulish_200ExtraLight_Italic,
		Mulish_300Light_Italic,
		Mulish_400Regular_Italic,
		Mulish_500Medium_Italic,
		Mulish_600SemiBold_Italic,
		Mulish_700Bold_Italic,
		Mulish_800ExtraBold_Italic,
		Mulish_900Black_Italic,
	});

	if (!isLoadingComplete || !fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar style="dark" />
			</SafeAreaProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
