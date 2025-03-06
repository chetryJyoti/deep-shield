import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BrainCog,
  RotateCw,
  Play,
  Clock,
  Plus,
  MoreVertical,
  Gem,
  Smartphone,
  Ban,
  Ellipsis,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#c4d5fa", "#e2e4ff"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.leftSpacer} />
          <View style={styles.centerContent}>
            <BrainCog size={24} color="#000000" />
            <Text style={styles.appTitle}>DeepShield</Text>
          </View>
          <View style={styles.rightContent}>
            <TouchableOpacity
              style={{ backgroundColor: "white", borderRadius: 50, padding: 5 }}
            >
              <RotateCw size={20} color={Colors.light.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scrollView}>
          {/* Quick Block Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Quick Block</Text>
            <Text style={styles.cardSubtitle}>
              Start blocking instantly with one tap.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push("/(tabs)/(home)/quick-block")}
            >
              <Play size={20} color="#fff" fill="#fff" />
              <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.premiumFeature}>
              <Clock size={18} color="#000" />
              <Text style={styles.featureText}>Timer and Pomodoro</Text>
              <View style={styles.spacer} />
              <Gem size={18} color="#FF9500" />
              <Text style={styles.premiumText}>Premium</Text>
            </TouchableOpacity>
          </View>

          {/* Schedules Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Schedules</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => router.push("/(tabs)/(home)/schedules")}
            >
              <Plus size={20} color="#2f96ff" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          {/* Schedule Card */}
          <View style={styles.scheduleCard}>
            <View style={styles.scheduleTop}>
              <View style={styles.activeTag}>
                <Clock size={18} color="#fff" />
                <Text style={styles.activeText}>Active</Text>
              </View>
              <TouchableOpacity>
                <Ellipsis size={20} color="#777" />
              </TouchableOpacity>
            </View>

            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleEmoji}>💻</Text>
              <Text style={styles.scheduleTitle}>Coding</Text>
              <Text style={styles.scheduleTime}>Active until 1:00 am</Text>
              <View style={styles.scheduleDetails}>
                <Ban size={16} color="#777" />
                <Text style={styles.scheduleDetailText}>·</Text>
                <Smartphone size={16} color="#777" />
                <Text style={styles.scheduleDetailText}>5</Text>
              </View>
            </View>
          </View>

          {/* Templates Section */}
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Templates</Text>
              <Text style={styles.sectionSubtitle}>
                Need ideas? Check out what users love.
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.collapseButton}>^</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  leftSpacer: {
    flex: 1,
  },
  centerContent: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  rightContent: {
    flex: 1,
    alignItems: "flex-end",
  },
  appTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000000",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: "#2f96ff",
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  premiumFeature: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 24,
    borderStyle: "dashed",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  spacer: {
    flex: 1,
  },
  premiumText: {
    color: "#FF9500",
    fontWeight: "600",
    marginLeft: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 4,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    gap: 4,
  },
  addButtonText: {
    color: "#2f96ff",
    fontWeight: "600",
    fontSize: 16,
  },
  scheduleCard: {
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#2f96ff",
  },
  scheduleTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  activeTag: {
    backgroundColor: "#2f96ff",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
  },
  activeText: {
    color: "white",
    fontWeight: "600",
  },
  scheduleContent: {
    alignItems: "center",
    paddingVertical: 12,
  },
  scheduleEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  scheduleTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  scheduleTime: {
    fontSize: 16,
    color: "#2f96ff",
    marginBottom: 8,
  },
  scheduleDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  scheduleDetailText: {
    color: "#777",
  },
  collapseButton: {
    fontSize: 24,
    color: "#777",
  },
});
