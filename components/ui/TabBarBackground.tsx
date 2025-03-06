// components/ui/TabBarBackground.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";

export default function TabBarBackground() {
  if (Platform.OS === "ios") {
    return (
      <BlurView tint="light" intensity={90} style={StyleSheet.absoluteFill} />
    );
  }

  // For Android and other platforms, use the gradient
  return (
    <LinearGradient
      colors={["#c4d5fa", "#e2e4ff"]}
      style={StyleSheet.absoluteFill}
    />
  );
}
