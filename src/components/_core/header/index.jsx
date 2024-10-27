import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

const Header = ({ title }) => {
  return <></>;
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.3,
    overflow: "visible",
    resizeMode: "cover",
  },
  text: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Header;
