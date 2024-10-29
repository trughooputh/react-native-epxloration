import React, { useState, useEffect, useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";

// Styles
import { margin, padding } from "@styles/spacing";
import { theme, borderRadius } from "@styles/themes";
import { fontsSize } from "@styles/fonts";

// Context
import { ResultsContext } from "@store/context";

// API
import { searchWord } from "@api/index";

// Utils
import { screenWidth } from "@utils/device";

export default function SearchInput() {
  const [word, setWord] = useState<string>("");
  const { setQuery } = useContext(ResultsContext);

  const handleChange = (value: string) => {
    setQuery(value);
    setWord(value);
  };

  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search..."
      value={word}
      onChangeText={handleChange}
    // onEndEditing={handleSearch}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    borderRadius: borderRadius.S,
    borderColor: theme.primary.borderColor,
    backgroundColor: theme.primary.background,
    borderWidth: 1,
    margin: margin.M,
    padding: padding.S,
    fontSize: fontsSize.S,
    width: screenWidth - 40,
  },
});
