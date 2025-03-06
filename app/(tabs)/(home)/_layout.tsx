import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { Platform, Text, TouchableOpacity } from "react-native";

export default function Homelayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="[id]" /> */}
      <Stack.Screen
        name="quick-block"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
          // headerTitle: "Quick Block",
          // headerShadowVisible: false,
          // headerBackground: () => (
          //   <LinearGradient
          //     colors={["#e0ebff", "#f5f7ff"]}
          //     style={{ flex: 1 }}
          //   />
          // ),
          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => router.back()}>
          //     <Text
          //       style={{
          //         color: Colors.light.primary,
          //         fontSize: 16,
          //         fontWeight: "bold",
          //       }}
          //     >
          //       Cancel
          //     </Text>
          //   </TouchableOpacity>
          // ),
          // headerRight: () => (
          //   <TouchableOpacity onPress={() => router.back()}>
          //     <Text
          //       style={{
          //         color: Colors.light.primary,
          //         fontSize: 16,
          //         fontWeight: "bold",
          //       }}
          //     >
          //       Save
          //     </Text>
          //   </TouchableOpacity>
          // ),
        }}
      />
      <Stack.Screen
        name="schedules"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : undefined,
        }}
      />
    </Stack>
  );
}
