import { View, StyleSheet } from "react-native";
import React from "react";

//Context
import { ContextProvider } from "./context";

//Components
import Card from "@components/_core/card";
import Results from "@components/results";
import SearchBar from "@components/search/SearchInput";

//Style
import { colors } from "@styles/themes";

export default function Main() {
  return (
    <ContextProvider>
      <View style={styles.main}>
        <SearchBar />
        <Card title="Hello" description="New card" />
      </View>
      <Results />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.main.primary,
  },
});
