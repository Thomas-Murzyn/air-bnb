import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { ScrollView, Text, FlatList } from "react-native";
import Annonce from "../components/Annonce";
import axios from "axios";

export default function HomeScreen() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://express-airbnb-api.herokuapp.com/rooms"
        );

        setData(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();
  return isLoading ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <Annonce item={item} />}
    />
  ) : (
    <Text>Downloading...</Text>
  );
}
