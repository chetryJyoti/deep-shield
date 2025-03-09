import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Gem } from "lucide-react-native";

const PremiumBtn = () => {
  return (
    <View>
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumButtonText}>Multiple days</Text>
        <View style={styles.premiumIcon}>
          <Gem size={18} color="#FF9500" />
          <Text style={styles.premiumText}>Premium</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PremiumBtn;

const styles = StyleSheet.create({
  premiumButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 20,
    borderStyle: "dashed",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  premiumButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  premiumIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  premiumIconText: {
    fontSize: 16,
    color: "#FF9500",
    marginRight: 4,
  },
  premiumText: {
    fontSize: 16,
    color: "#FF9500",
  },
});
