import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// Utils
import { screenWidth } from '@utils/device';

// Styles
import { margin, padding } from '@styles/spacing';

type Props = {
  name: string;
  url: string;
}

export function CarCard({ name, url }: Props) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{name}</Text>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    width: screenWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: margin.M,
    height: 200,
  },
  image: {
    width: '100%',
    height: "100%"
  },
  text: {
    fontSize: 16,
    paddingVertical: padding.M,
    textAlign: 'center',
  }
});