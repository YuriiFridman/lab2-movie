import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function DetailsScreen({ route }) {
  const { imdbID } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${imdbID}&apikey=5cdf88cf`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{movie.Title}</Text>
      <Text>Year: {movie.Year}</Text>
      <Text>Genre: {movie.Genre}</Text>
      <Text>Director: {movie.Director}</Text>
      <Text>Actors: {movie.Actors}</Text>
      <Text>Plot: {movie.Plot}</Text>
    </View>
  );
}
