import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
}
