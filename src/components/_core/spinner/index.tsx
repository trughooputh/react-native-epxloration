import React from "react"
import { theme } from "@styles/themes"

// Components
import { ActivityIndicator } from "react-native"

export default function Spinner() {
  return (
    <ActivityIndicator size="small" color={theme.loader.background} />
  )
}