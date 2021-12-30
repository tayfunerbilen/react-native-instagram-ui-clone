import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";

function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Stories />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
