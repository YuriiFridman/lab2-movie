import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=5cdf88cf`
      );
      const data = await response.json();
      console.log(data);

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Помилка: ", error);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Введіть назву фільма"
        value={query}
        onChangeText={setQuery}
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
      />
      <Button title="Пошук" onPress={searchMovies} />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Деталі", { imdbID: item.imdbID })
            }
          >
            <Text style={{ padding: 10, fontSize: 18 }}>
              {item.Title} ({item.Year})
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
