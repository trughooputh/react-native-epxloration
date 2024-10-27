import React from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';

// Styles
import { theme } from '@styles/themes';
import { fontsSize } from '@styles/fonts';

export default function PlatformDisplay() {
  const platformText = Platform.OS === 'ios' ? 'iOS' : 'Android';

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 18 }}>You're using {platformText}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.primary.text,
    padding: 20,
    alignItems: 'center'
  },
  text: {
    fontSize: fontsSize.L,
  }
});
