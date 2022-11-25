import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { Tweet } from "../screens/Search"
import { Entypo } from '@expo/vector-icons';


type Props = { tweet: Tweet }

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
}

const CardTweetSearch = ({ tweet }: Props) => {
  const navigation = useNavigation()
  const [like, setLike] = useState(false)
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50, marginRight: 20, borderRadius: 50 }}
        source={{
          uri: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
        }}
      />
      <View style={{ flexShrink: 1, width: '100%' }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginBottom: 4,
          }}
        >
          <Text style={{ ...styles.text, fontWeight: "800", marginRight: 4 }}>
            Elon Musk
          </Text>
          <Text
            style={{
              ...styles.text,
              fontWeight: "300",
              color: "rgb(113, 118, 123)",
            }}
          >
            {new Date(tweet["Date Created"]).toLocaleDateString(
              undefined,
              options
            )}
          </Text>
        </View>
        <Text style={styles.text}>{tweet.Tweets}</Text>
        <View style={styles.containerBottomTweet}>
          <Entypo name="message" size={24} color="lightgrey" />
          <Entypo name="retweet" size={24} color="lightgrey" />
          <View style={styles.containerIcons}>
            <TouchableOpacity onPress={() => setLike(!like)}>
              {!like ?
                <Entypo name="heart-outlined" size={24} color="lightgrey" /> :
                <Entypo name="heart-outlined" size={24} color="red" />
              }

            </TouchableOpacity>
            <Text style={{ ...styles.text, fontWeight: "400", paddingLeft: 8 }}>
              {tweet["Number of Likes"]} Likes
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CardTweetSearch

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomColor: "rgb(47, 51, 54)",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    // flexGrow: 1,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  containerBottomTweet: {
    paddingTop: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  containerIcons: {
    display: "flex",
    flexDirection: 'row',
  }
})
