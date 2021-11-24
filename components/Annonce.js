import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";

export default function Annonce({ item }) {
  const navigation = useNavigation();

  const coverImage = item.photos[0].url;
  return (
    <View style={styles.annonce}>
      <View style={styles.pictureContainer}>
        <Image source={coverImage}></Image>
      </View>

      <View>
        <View>
          <Text>{item.title}</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  annonce: {
    width: "100%",
    paddingHorizontal: 20,
  },

  pictureContainer: {
    width: "100%",
  },
});
