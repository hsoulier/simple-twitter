import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from "../types"
import CardTweetSearch from "../components/CardTweetSearch"
import tweets from "../constants/tweets.json"

export default function ModalScreen({route , navigation} : RootTabScreenProps<"Home">) {
  const { tweetId } = route.params;
  
  return (
    <View style={styles.container}>
      <CardTweetSearch tweet={tweets[tweetId]}></CardTweetSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
