import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "@styles/themes";
import { margin, padding } from "@styles/spacing";
import { fontsSize } from "@styles/fonts";

// Core components can be seen as reusable components that are used across multiple screens.
export default function Card({ title, description }) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 200,
    flex: 1,
    backgroundColor: theme.primary.background,
    borderRadius: 8,
    padding: padding.M,
    margin: margin.S,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: fontsSize.L,
    color: theme.primary.text,
    fontWeight: "bold",
    marginBottom: margin.XS,
  },
  description: {
    fontSize: fontsSize.M,
    color: theme.secondary.text,
  },
});
