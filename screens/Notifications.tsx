import { FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"

const data = [
  { id: 1, name: "John Doe", type: "retweet" },
  { id: 2, name: "Kim", type: "like" },
  { id: 3, name: "Dingo", type: "retweet" },
  { id: 4, name: "Minnie", type: "retweet" },
  { id: 5, name: "John Doe", type: "comment" },
  { id: 6, name: "John Doe", type: "comment" },
]

export default function Notifications({
  navigation,
}: RootTabScreenProps<"Notifications">) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          renderItem={({ item }) => (
            <View style={s.container}>
              <Text style={{ ...s.text, fontWeight: "800", marginRight: 4 }}>
                {item.name}
              </Text>
              <Text style={{ ...s.text }}> as {item.type} your tweet</Text>
            </View>
          )}
          data={data}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})

const s = StyleSheet.create({
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
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  containerIcons: {
    display: "flex",
    flexDirection: "row",
  },
})
