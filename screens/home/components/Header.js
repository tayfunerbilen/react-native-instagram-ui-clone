import {StyleSheet, View, TouchableOpacity} from "react-native";

import {
	Logo,
	Messenger,
	Heart,
	Plus
} from "../../../Icons";

function Header() {
	return (
		<View style={styles.header}>
			<Logo size={104} fill="#000"/>
			<View style={styles.actions}>
				<TouchableOpacity activeOpacity="0.6">
					<Plus size={24} fill="#000"/>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity="0.6" style={styles.button}>
					<View style={styles.dotContainer}>
						<View style={styles.dot}/>
					</View>
					<Heart size={24} fill="#000"/>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity="0.6" style={styles.button}>
					<Messenger size={24} fill="#000"/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		height: 44,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingBottom: 4,
	},
	actions: {
		flexDirection: 'row'
	},
	button: {
		marginLeft: 20
	},
	dot: {
		backgroundColor: '#FE3650',
		width: 8,
		height: 8,
		borderRadius: 10
	},
	dotContainer: {
		zIndex: 2,
		width: 11,
		height: 11,
		backgroundColor: '#fff',
		borderRadius: 13,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		right: 0,
	}
})
