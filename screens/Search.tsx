import React, { useState } from "react"
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native"
import { Controller, useForm } from "react-hook-form"
import { TabView, SceneMap } from "react-native-tab-view"
import { View } from "../components/Themed"
import { RootTabScreenProps } from "../types"
import avatar from "../assets/images/avatar.jpg"
import tweets from "../constants/tweets.json"
import CardTweetSearch from "../components/CardTweetSearch"

type FormValues = { searchText: string }
export type Tweet = typeof tweets[0]
type Results = { popular: Tweet[]; recent: Tweet[] }

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
)

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
})

export default function Search({ navigation }: RootTabScreenProps<"Search">) {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { searchText: "" },
  })

  const [results, setResults] = useState<Results>({
    popular: [],
    recent: [],
  })

  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ])
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width, height: layout.height - 100 }}
      />
      {/* <FlatList
          data={results.popular}
          renderItem={({ item }) => <CardTweetSearch tweet={item} />}
          keyExtractor={(item) => item["Date Created"]}
          // extraData={selectedId}
        /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
