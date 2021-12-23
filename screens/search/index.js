import {View, Text, StyleSheet} from "react-native";

function Search() {
    return (
        <View style={styles.container}>
            <Text>Search</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
