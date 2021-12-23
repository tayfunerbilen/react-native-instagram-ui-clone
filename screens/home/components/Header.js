import {Chat, Heart, Logo, Plus} from "../../../icons";
import {StyleSheet, View} from "react-native";

function Header() {
    return (
        <View style={styles.header}>
            <Logo size={120}/>
            <View style={styles.actions}>
                <View style={styles.icon}>
                    <Plus fill="#000"/>
                </View>
                <View style={styles.icon}>
                    <Heart fill="#000"/>
                    <View style={styles.notificationContent}>
                        <View style={styles.notification}/>
                    </View>
                </View>
                <View style={styles.icon}>
                    <Chat fill="#000"/>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    actions: {
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 20,
        position: 'relative'
    },
    notification: {
        width: 8,
        height: 8,
        backgroundColor: '#FF3450',
        borderRadius: 100
    },
    notificationContent: {
        position: 'absolute',
        top: -2,
        right: -2,
        backgroundColor: '#fff',
        padding: 1.5
    }
})
