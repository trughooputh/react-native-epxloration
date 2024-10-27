import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

export default function FadeInView({ duration = 300, style = {}, children }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[style, { opacity: fadeAnim, flex: 1 }]}>
      {children}
    </Animated.View>
  );
}
