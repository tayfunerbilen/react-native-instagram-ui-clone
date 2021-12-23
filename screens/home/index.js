import {View, Text, RefreshControl, ScrollView, StyleSheet} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "../../components/shared/Post";
import posts from "../../data/posts";
import {useCallback, useState} from "react";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function Home() {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Stories/>
                {posts && posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </ScrollView>
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
