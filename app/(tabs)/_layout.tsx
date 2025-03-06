import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ChartBar, Shield, User, Zap } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          elevation: 0, // Remove shadow on Android
          borderTopWidth: 0, // Remove top border
        },
        tabBarBackground: () => (
          <LinearGradient colors={["#e0ebff", "#f5f7ff"]} style={{ flex: 1 }} />
        ),
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Blocking",
          tabBarIcon: ({ color, focused }) => (
            <Shield color={color} fill={focused ? color : "none"} />
          ),
        }}
      />
      <Tabs.Screen
        name="strictmode"
        options={{
          title: "Strict Mode",
          tabBarIcon: ({ color, focused }) => (
            <Zap color={color} fill={focused ? color : "none"} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ color, focused }) => (
            <ChartBar color={color} fill={focused ? color : "none"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <User color={color} fill={focused ? color : "none"} />
          ),
        }}
      />
    </Tabs>
  );
}
