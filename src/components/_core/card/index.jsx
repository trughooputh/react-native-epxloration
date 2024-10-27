import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "@styles/themes";
import { fontsSize, margin, padding } from "@styles/helpers";

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
    backgroundColor: colors.card.background,
    borderRadius: 8,
    padding: padding.M,
    margin: margin.S,
    shadowColor: colors.card.shadow,
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
    color: colors.fonts.primary,
    fontWeight: "bold",
    marginBottom: margin.XS,
  },
  description: {
    fontSize: fontsSize.M,
    color: colors.fonts.primary,
  },
});
