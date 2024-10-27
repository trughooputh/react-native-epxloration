import React from "react";
import { FlatList, StyleSheet } from "react-native";

// Mock
import cars from "../../../mock/data";

// Components
import { CarCard } from "@components/car/card";

export default function CarList() {
  return (
    <FlatList data={cars} renderItem={({ item }) => <CarCard url={item.url} name={item.name} />} keyExtractor={(item) => item.name} />
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderWidth: 1,
    flex: 1,
  },
});
