import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'

// Components
import PlatformInformation from '@components/_core/platformInformation'

// Styles
import { fontsSize } from '@styles/fonts'
import { margin } from '@styles/spacing'
import { theme } from '@styles/themes'

import PorscheDigitalLogo from "@assets/porsche-digital-logo.png";


export default function Header() {
  return (
    <>
      <Image style={styles.logo} source={PorscheDigitalLogo} resizeMode="contain" />
      <Text style={styles.title}>React Native Masterclass App</Text>
      <PlatformInformation />
    </>
  )
}

const styles = StyleSheet.create({
  logo: {
    position: "relative",
    width: "50%",
    height: 20,
  },
  title: {
    fontSize: fontsSize.S,
    textAlign: "center",
    margin: margin.M,
    color: theme.primary.text,
  }
})