import {StyleSheet, View, ScrollView, Text} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import posts from "../../data/posts"
import Post from "../../components/shared/Post"
import Divider from "../../components/shared/Divider"

function Home() {
	return (
		<>
			<Header/>
			<ScrollView
				stickyHeaderIndices={[1]}
				style={styles.container}
			>
				<Stories/>
				<Divider />
				{posts.map(post => <Post key={post.id} post={post}/>)}
			</ScrollView>
		</>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})
