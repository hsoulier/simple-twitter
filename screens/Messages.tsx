import { StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"

export default function Messages({
  navigation,
}: RootTabScreenProps<"Messages">) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "800" }}>You have no messages</Text>
        <Text>Petit freluquet 😏</Text>
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
