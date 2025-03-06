import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import {
  Ban,
  Smartphone,
  Globe,
  ChevronRight,
  Grid,
  ShoppingCart,
  Store,
  Gem,
  ChevronDown,
} from "lucide-react-native";

import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const QuickBlock = () => {
  const [currentList, setCurrentList] = useState("Blocklist");

  // Navigation functions
  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // Save the changes and go back
    // You would add your save logic here
    router.back();
  };

  // Navigation to sub-screens
  const navigateToApps = () => {
    // router.push("BlockApps");
  };

  const navigateToWebsites = () => {
    // router.push("BlockWebsites");
  };

  const navigateToKeywords = () => {
    // router.push("BlockKeywords");
  };

  // Toggle premium features
  const [inAppPurchaseBlocking, setInAppPurchaseBlocking] = useState(false);
  const [adultContentBlocking, setAdultContentBlocking] = useState(false);
  const [disableAppInstallation, setDisableAppInstallation] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Quick Block</Text>

        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveBtn}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Blocking Section */}
      <View style={styles.blockingSection}>
        <View style={styles.blockingHeader}>
          <Text style={styles.blockingTitle}>Blocking</Text>
          <TouchableOpacity
            style={styles.blocklistContainer}
            onPress={() =>
              setCurrentList(
                currentList === "Blocklist" ? "Allowlist" : "Blocklist"
              )
            }
          >
            <Ban size={22} color="#3B95FF" />
            <Text style={styles.blocklistText}>{currentList}</Text>
            <ChevronDown size={22} color="#3B95FF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.instruction}>
          Select apps, webs or keywords you want to block.
        </Text>

        <View style={styles.optionsCard}>
          {/* Apps Section */}
          <TouchableOpacity style={styles.optionItem} onPress={navigateToApps}>
            <Text style={styles.optionText}>Apps</Text>
            <View style={styles.optionInfoContainer}>
              <Grid size={16} color="#999" />
              <Text style={styles.countText}>0</Text>
              <Text style={styles.dot}>•</Text>
              <Smartphone size={16} color="#999" />
              <Text style={styles.countText}>0</Text>
              <Text style={styles.dot}>•</Text>
              <Globe size={16} color="#999" />
              <Text style={styles.countText}>0</Text>
              <ChevronRight size={16} color="#CCC" />
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Websites Section */}
          <TouchableOpacity
            style={styles.optionItem}
            onPress={navigateToWebsites}
          >
            <Text style={styles.optionText}>Websites</Text>
            <View style={styles.optionInfoContainer}>
              <Globe size={16} color="#999" />
              <Text style={styles.countText}>0</Text>
              <ChevronRight size={16} color="#CCC" />
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Safari keywords Section */}
          <TouchableOpacity
            style={styles.optionItem}
            onPress={navigateToKeywords}
          >
            <Text style={styles.optionText}>Safari keywords</Text>
            <View style={styles.optionInfoContainer}>
              <Grid size={16} color="#999" />
              <Text style={styles.countText}>0</Text>
              <ChevronRight size={16} color="#CCC" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Extra Options Section */}
      <View style={styles.extraOptionsSection}>
        <Text style={styles.extraOptionsTitle}>Extra options</Text>

        {/* In-app purchases blocking */}
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => setInAppPurchaseBlocking(!inAppPurchaseBlocking)}
        >
          <View style={styles.featureIconContainer}>
            <View style={[styles.iconCircle, { backgroundColor: "#E6F2FF" }]}>
              <ShoppingCart size={22} color="#3B95FF" />
            </View>
          </View>
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>In-app purchases blocking</Text>
            <Text style={styles.featureDescription}>
              One toggle to stop unwanted purchases in games or apps.
            </Text>
          </View>
          <View style={styles.premiumBadge}>
            <Gem size={18} color="#FFA500" />
          </View>
        </TouchableOpacity>

        {/* Adult content blocking */}
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => setAdultContentBlocking(!adultContentBlocking)}
        >
          <View style={styles.featureIconContainer}>
            <View style={[styles.iconCircle, { backgroundColor: "#E6F2FF" }]}>
              <View style={styles.ageCircle}>
                <Text style={styles.ageText}>18+</Text>
              </View>
            </View>
          </View>
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>Adult content blocking</Text>
            <Text style={styles.featureDescription}>
              Porn sites are automatically detected and blocked in all your
              browsers.
            </Text>
          </View>
          <View style={styles.premiumBadge}>
            <Gem size={18} color="#FFA500" />
          </View>
        </TouchableOpacity>

        {/* Disable installation of new apps */}
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => setDisableAppInstallation(!disableAppInstallation)}
        >
          <View style={styles.featureIconContainer}>
            <View style={[styles.iconCircle, { backgroundColor: "#E6F2FF" }]}>
              <Ionicons name="logo-apple-appstore" size={24} color="#3B95FF" />
            </View>
          </View>
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>
              Disable installation of new apps
            </Text>
            <Text style={styles.featureDescription}>
              This feature hides the AppStore, so you can't install new apps.
            </Text>
          </View>
          <View style={styles.premiumBadge}>
            <Gem size={18} color="#FFA500" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QuickBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF1F9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cancelBtn: {
    color: "#3B95FF",
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  saveBtn: {
    color: "#3B95FF",
    fontSize: 16,
    fontWeight: "600",
  },
  blockingSection: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  blockingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blockingTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  blocklistContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  blocklistText: {
    fontSize: 16,
    color: "#3B95FF",
    marginHorizontal: 6,
  },
  instruction: {
    color: "#8E8E93",
    fontSize: 14,
    marginTop: 8,
    paddingVertical: 14,
  },
  optionsCard: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 25,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  optionText: {
    fontSize: 17,
    fontWeight: "500",
  },
  optionInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countText: {
    color: "#8E8E93",
    fontSize: 16,
    marginHorizontal: 4,
  },
  dot: {
    color: "#8E8E93",
    fontSize: 16,
    marginHorizontal: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#F2F2F7",
    marginLeft: 16,
  },
  extraOptionsSection: {
    paddingHorizontal: 20,
  },
  extraOptionsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  featureCard: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  featureIconContainer: {
    marginRight: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ageCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#3B95FF",
    justifyContent: "center",
    alignItems: "center",
  },
  ageText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#3B95FF",
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  featureDescription: {
    fontSize: 14,
    color: "#8E8E93",
    marginTop: 2,
  },
  premiumBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});
