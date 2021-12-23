import {View, Text, Image, Dimensions, StyleSheet} from "react-native";
import {useState} from "react";
import {Heart, Comment, Message, More, Bookmark} from "../../icons";
import SeeMore from 'react-native-see-more-inline';
import { dayjs } from "../../utils"

function Post({post}) {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    Image.getSize(post.image, (w, h) => {
        const screenWidth = Dimensions.get('window').width
        const scaleFactor = w / screenWidth
        const imageHeight = h / scaleFactor
        setWidth(screenWidth)
        setHeight(imageHeight)
    })

    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: post.user.avatar
                        }}
                    />
                    <Text style={styles.username}>{post.user.name}</Text>
                </View>
                <More fill="#262626"/>
            </View>
            <Image
                style={{
                    ...styles.image,
                    width,
                    height
                }}
                source={{
                    uri: post.image
                }}
            />
            <View style={styles.inner}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <Heart fill="#000" style={styles.icon}/>
                        <Comment fill="#000" size={22} style={styles.icon}/>
                        <Message fill="#000" size={22}/>
                    </View>
                    <Bookmark fill="#000"/>
                </View>
                <View style={{marginBottom: 6}}>
                    <Text style={styles.likes}>{post.likes} likes</Text>
                </View>
                <SeeMore numberOfLines={3}>
                    <Text style={styles.postUser}>{post.user.name}</Text>
                    {'  '}
                    <Text style={styles.description}>
                        {post.description.split(' ').map(str => {
                            if (str.includes('#')) {
                                return <Text style={styles.hashtag}>{str} {' '}</Text>
                            }
                            return str + ' '
                        })}
                    </Text>
                </SeeMore>
                <View style={{marginTop: 7}}>
                    <Text style={styles.comments}>View all {post.comments} comments</Text>
                </View>
                <View style={{marginTop: 7, flexDirection: 'row'}}>
                    <Text style={styles.time}>
                        {dayjs(post.date).fromNow()}
                    </Text>
                    <Text style={styles.translation}>See Translation</Text>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10
    },
    image: {},
    username: {
        fontSize: 14,
        fontWeight: '500'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
    inner: {
        paddingHorizontal: 15
    },
    likes: {
        fontWeight: '600',
        fontSize: 14
    },
    postUser: {
        fontWeight: '600',
        fontSize: 14
    },
    leftActions: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 15
    },
    description: {
        fontSize: 14,
        fontWeight: 'normal'
    },
    post: {
        marginBottom: 20
    },
    comments: {
        opacity: 0.5
    },
    time: {
        fontSize: 12,
        opacity: 0.5
    },
    translation: {
        fontSize: 12,
        fontWeight: '600',
        paddingLeft: 10
    },
    hashtag: {
        color: '#00376b'
    }
})
