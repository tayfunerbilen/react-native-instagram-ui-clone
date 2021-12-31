import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import Screens from "./Screens";

export default function App() {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar style="dark"/>
			<NavigationContainer>
				<Screens/>
			</NavigationContainer>
		</SafeAreaView>
	);
}
