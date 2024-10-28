import React, { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";

// Context
import { ResultsContext } from "@store/context";

// Components
import { CarCard } from "@components/car/card";

export default function CarList() {

  const { filteredResults } = useContext(ResultsContext);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={filteredResults}
      renderItem={({ item }) => <CarCard car={item} />}
      keyExtractor={(item) => item.name}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderWidth: 1,
    flex: 1,
  },
});
