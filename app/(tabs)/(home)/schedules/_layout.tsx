import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { X } from "lucide-react-native";
import { Platform, Text, TouchableOpacity } from "react-native";

export default function Homelayout() {
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
        name="time"
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
        name="location"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
        }}
      />
    </Stack>
  );
}
