import { TouchableOpacity, StyleSheet, FlatList } from "react-native"
import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"
import CardTweetSearch from "../components/CardTweetSearch"
import tweets from "../constants/tweets.json"
import { AntDesign } from '@expo/vector-icons'; 

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", backgroundColor: 'black' }}>
        <FlatList
          data={tweets}
          renderItem={({ item, index }) => <TouchableOpacity onPress={() => navigation.push("Modal",{ tweetId: index })}><CardTweetSearch tweet={item}/></TouchableOpacity>}
          keyExtractor={(_, index) => index.toString()}
          // extraData={selectedId}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
