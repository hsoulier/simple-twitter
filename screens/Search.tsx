import React, { useState } from "react"
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { Controller, useForm } from "react-hook-form"
import { View } from "../components/Themed"
import { RootTabScreenProps } from "../types"
import avatar from "../assets/images/avatar.jpg"
import tweets from "../constants/tweets.json"
import CardTweetSearch from "../components/CardTweetSearch"

type FormValues = { searchText: string }
export type Tweet = typeof tweets[0]
type Results = { popular: Tweet[]; recent: Tweet[] }

export default function Search({ navigation }: RootTabScreenProps<"Search">) {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { searchText: "" },
  })

  const [results, setResults] = useState<Results>({
    popular: [],
    recent: [],
  })

  const [type, setType] = useState<"popular" | "recent">("popular")
  const searchTweets = ({ searchText }: FormValues) => {
    const listTweets = tweets.filter((tweet) =>
      tweet.Tweets.toString().includes(searchText)
    )
    console.log(listTweets.length)
    setResults({
      popular: listTweets.sort(
        (a, b) => b["Number of Likes"] - a["Number of Likes"]
      ),
      recent: listTweets.sort(
        (a, b) =>
          new Date(b["Date Created"]).getTime() -
          new Date(a["Date Created"]).getTime()
      ),
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={avatar} style={styles.avatar} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Search"
              returnKeyType="search"
              onSubmitEditing={handleSubmit((data) => searchTweets(data))}
            />
          )}
          name="searchText"
        />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={{
            ...styles.tabElement,
            ...(type === "popular" && styles.tabSelected),
          }}
          onPress={() => setType("popular")}
        >
          <Text style={{ ...styles.buttonInner, color: "white" }}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tabElement,
            ...(type === "recent" && styles.tabSelected),
          }}
          onPress={() => setType("recent")}
        >
          <Text style={{ ...styles.buttonInner, color: "white" }}>Recent</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={results[type]}
        renderItem={({ item }) => <CardTweetSearch tweet={item} />}
        keyExtractor={(_, index) => index.toString()}
        // extraData={selectedId}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    borderBottomColor: "#525252",
    borderBottomWidth: 1,
    marginTop: 15,
  },
  buttonInner: {
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
    fontSize: 16,
  },
  tabElement: {
    // color: "white",
    width: "50%",
  },
  tabSelected: {
    borderBottomColor: "#042db5",
    borderBottomWidth: 2,
  },
  inputContainer: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "none",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: "#eee",
    fontSize: 16,
    flexGrow: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    backgroundColor: "transparent",
  },
})
