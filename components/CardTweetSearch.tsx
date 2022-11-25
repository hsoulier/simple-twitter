import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { Tweet } from "../screens/Search"

type Props = { tweet: Tweet }

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
}

const CardTweetSearch = ({ tweet }: Props) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50, marginRight: 20, borderRadius: 50 }}
        source={{
          uri: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
        }}
      />
      <View style={{ flexShrink: 1 }}>
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
        <Text style={{ ...styles.text, fontWeight: "400" }}>
          {tweet["Number of Likes"]} Likes
        </Text>
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
})
