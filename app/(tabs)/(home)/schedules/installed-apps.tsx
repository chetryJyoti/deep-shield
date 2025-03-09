import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

const InstalledApps = () => {
  const params = useLocalSearchParams();

  console.log("Parsed condition data:", params);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>InstalledApps</Text>
    </View>
  );
};

export default InstalledApps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  dataContainer: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  slotText: {
    fontSize: 14,
    marginLeft: 16,
    color: "#555",
  },
});
