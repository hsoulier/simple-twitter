import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from "../types"
import CardTweetSearch from "../components/CardTweetSearch"
import tweets from "../constants/tweets.json"
import { Ionicons } from '@expo/vector-icons'; 

export default function ModalScreen({route , navigation} : RootTabScreenProps<"Home">) {
  const { tweetId } = route.params;

  return (
    <View style={styles.container}>
      <View style= {{ marginTop: 32, marginLeft: 16}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ ...styles.text, fontWeight: "800", fontSize: 18 }}>Tweet</Text>
        </View>
        <TouchableOpacity style={{position: 'absolute'}} onPress={() => navigation.goBack()}>
          <Ionicons  name="arrow-back" size={32} color="lightgrey" />
        </TouchableOpacity>
      </View>
      <CardTweetSearch tweet={tweets[tweetId]}></CardTweetSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'black'
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
  text: {
    color: "white",
    fontSize: 16,
  },
});
