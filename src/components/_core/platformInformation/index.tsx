import React from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';

// Styles
import { theme } from '@styles/themes';
import { fontsSize } from '@styles/fonts';

export default function PlatformInformation() {
  const platformText = Platform.OS === 'ios' ? 'iOS' : 'Android';

  return (
    <View style={styles.main}>
      <Text style={styles.text}>You're using {platformText}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.primary.background,
  },
  text: {
    fontSize: fontsSize.XS,
  }
});
