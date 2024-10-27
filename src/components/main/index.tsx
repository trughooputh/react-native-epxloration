import React from "react";
import { View, StyleSheet } from "react-native";

// Context
import { ContextProvider } from "@store/context";
// Components
import Card from "@components/_core/card";
import Results from "@components/results";
import SearchBar from "@components/search/SearchInput";

// Styles
import { theme } from "@styles/themes";
import CarList from "@components/car/list";
import Header from "@components/header";

export default function Main() {
  return (
    <ContextProvider>
      <View style={styles.main}>
        <Header />
        <SearchBar />
        <CarList />
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.primary.background,
    flex: 1,
    alignItems: 'center',
  }
});
