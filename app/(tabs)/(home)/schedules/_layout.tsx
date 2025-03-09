import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { X } from "lucide-react-native";
import { Platform, Text, TouchableOpacity } from "react-native";

export default function ScheduleLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
        }}
      />
      <Stack.Screen
        name="time-based"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
        }}
      />
      <Stack.Screen
        name="usage-limit"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
        }}
      />
      <Stack.Screen
        name="location-based"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
        }}
      />
      <Stack.Screen
        name="installed-apps"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
        }}
      />
      <Stack.Screen
        name="create-schedule"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
        }}
      />
    </Stack>
  );
}
