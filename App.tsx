import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Components
import Main from '@components/main';

// Styles
import { theme } from '@styles/themes';
import { screenWidth } from '@utils/device';

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.primary.background,
    width: screenWidth
  }
})

