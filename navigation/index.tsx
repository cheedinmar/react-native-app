/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../types';

import {
	getFocusedRouteNameFromRoute,
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
	useNavigationContainerRef,
} from '@react-navigation/native';
import NotFoundScreen from '../screens/NotFoundScreen';

import LinkingConfiguration from './LinkingConfiguration';
import Home from '../screens/Home';
import Investment from '../screens/Investment';
import Portfolio from '../screens/PortFolio'
const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		backgroundColor: '#EFF5F9',
	},
};

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	const navigationRef = useNavigationContainerRef();
	const routeNameRef = React.useRef<string | null>(null);

	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			ref={navigationRef}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "green",
        headerStyle: { backgroundColor: "white" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "" }} />
      <Stack.Screen
        name="Investment"
        component={Investment}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Portfolio"
        component={Portfolio}
        options={{ title: "" }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
