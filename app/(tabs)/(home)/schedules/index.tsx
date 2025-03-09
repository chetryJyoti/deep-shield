import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { X, Clock, Hourglass, MapPin } from "lucide-react-native";
import { router } from "expo-router";

const BlockingCondition = () => {
  const handleBack = () => {
    router.back();
  };

  const navigateToTimeCondition = () => {
    router.push("/(tabs)/(home)/schedules/time-based");
  };

  const navigateToUsageLimit = () => {
    router.push("/(tabs)/(home)/schedules/usage-limit");
  };

  const navigateToLocationCondition = () => {
    router.push("/(tabs)/(home)/schedules/location-based");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <X size={24} color="#3B95FF" />
      </TouchableOpacity>

      <View style={styles.headerContent}>
        <Text style={styles.title}>Blocking condition</Text>
        <Text style={styles.subtitle}>
          Select when or where you don't want to be disturbed
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionCard}
          onPress={navigateToTimeCondition}
        >
          <View style={styles.iconContainer}>
            <Clock size={24} color="#FFF" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Time</Text>
            <Text style={styles.optionDescription}>
              e.g. working hours, weekend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionCard}
          onPress={navigateToUsageLimit}
        >
          <View style={styles.iconContainer}>
            <Hourglass size={24} color="#FFF" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Usage limit</Text>
            <Text style={styles.optionDescription}>
              e.g. social media max 30 minutes a day
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionCard}
          onPress={navigateToLocationCondition}
        >
          <View style={styles.iconContainer}>
            <MapPin size={24} color="#FFF" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Location</Text>
            <Text style={styles.optionDescription}>
              e.g. workplace or campus
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BlockingCondition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1F9",
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,
  },
  headerContent: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 30,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  optionCard: {
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#3B95FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  optionDescription: {
    fontSize: 15,
    color: "#8E8E93",
    marginTop: 3,
  },
});
