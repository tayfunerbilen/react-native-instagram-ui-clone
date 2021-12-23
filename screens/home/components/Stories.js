import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { PlusOutline } from "../../../icons";

function Stories() {

    const user = {
        name: 'Tayfun Erbilen',
        avatar: 'https://pbs.twimg.com/profile_images/1469715048436277258/141ZXcHO_400x400.jpg',
        hasStory: false
    }

    const items = [
        {
            id: 2,
            avatar: 'https://pbs.twimg.com/profile_images/1455707950341890051/flRfKMOq_400x400.jpg',
            user: 'Nacho Iacovino'
        },
        {
            id: 3,
            avatar: 'https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg',
            user: 'Rich Harris'
        },
        {
            id: 4,
            avatar: 'https://pbs.twimg.com/profile_images/1439602105107443714/Vpb3Ra1K_400x400.jpg',
            user: 'Taylor Otwell'
        },
        {
            id: 5,
            avatar: 'https://pbs.twimg.com/profile_images/1262107495037796359/N_HoUfGz_400x400.jpg',
            user: 'Galen Gidman'
        },
        {
            id: 6,
            avatar: 'https://pbs.twimg.com/profile_images/1458081709291868178/7bFb7AbF_400x400.jpg',
            user: 'Scott Jehl'
        },
        {
            id: 7,
            avatar: 'https://pbs.twimg.com/profile_images/1266007237874647044/-JqTQ_14_400x400.jpg',
            user: 'Ildiko Gaspar'
        },
        {
            id: 8,
            avatar: 'https://pbs.twimg.com/profile_images/1323356199945859072/oJM0cDPb_400x400.png',
            user: 'Joel Thoms'
        },
        {
            id: 9,
            avatar: 'https://pbs.twimg.com/profile_images/1386085325647265801/-w1nECc4_400x400.jpg',
            user: 'Emir Karşıyakalı'
        },
        {
            id: 10,
            avatar: 'https://pbs.twimg.com/profile_images/958997253892419586/Jb6NPqEa_400x400.jpg',
            user: 'Selman Kaya'
        }
    ]

    return (
        <View style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                <View style={{
                    ...styles.story,
                    marginLeft: 15
                }}>
                    <LinearGradient
                        colors={user.hasStory ? ['#D6307E', '#F37A41', '#F06E48'] : ['#fff']}
                        style={styles.avatarParent}
                    >
                        <Image
                            style={styles.avatar}
                            source={{
                                uri: user.avatar
                            }}
                        />
                    </LinearGradient>
                    {!user.hasStory && <View style={styles.plus}><PlusOutline size={20} fill="#0095F6" /></View>}
                    <Text style={styles.title} numberOfLines={1}>Your Story</Text>
                </View>
                {items.map((item, key) => (
                    <View style={styles.story}>
                        <LinearGradient
                            colors={['#D6307E', '#F37A41', '#F06E48']}
                            style={styles.avatarParent}
                        >
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: item.avatar
                                }}
                            />
                        </LinearGradient>
                        <Text style={styles.title} numberOfLines={1}>{item.user}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DBDBDB',
        paddingBottom: 10
    },
    story: {
        width: 68,
        marginRight: 15,
        position: 'relative'
    },
    avatarParent: {
        width: 68,
        height: 68,
        borderRadius: 34,
        padding: 2,
    },
    plus: {
        position: 'absolute',
        bottom: 20,
        right: 0,
        padding: 3,
        borderRadius: 25,
        backgroundColor: '#fff'
    },
    avatar: {
        width: 64,
        height: 64,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 64
    },
    title: {
        fontSize: 13,
        marginTop: 3,
        textAlign: 'center'
    }
})
