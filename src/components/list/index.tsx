import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// Mock data
import cars from "../../mock/data";

// Components
import Header from "@components/_core/header";

const SectionCar = ({ name, url }) => {
  return (
    <View>
      <Text style={{ fontSize: 16, marginTop: 40 }}>{name}</Text>
      <Image
        style={{
          height: 160,
          paddingBottom: 50,
          borderBottomWidth: 1,
        }}
        source={{ uri: url }}
      />
    </View>
  );
};

export default function List() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.main}>
      <Header title="Welcome to Porsche Digital" />
      <Text style={{ fontSize: 34, marginBottom: 40 }}>Porsche store</Text>
      {cars.map((car) => (
        <SectionCar url={car.url} name={car.name} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderWidth: 1,
    flex: 1,
  },
});
