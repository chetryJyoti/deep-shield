import { Stack } from "expo-router";

export default function StrictLayout() {
  return (
    <Stack>
      <Stack.Screen name="strictmode" options={{ headerShown: false }} />
      {/* <Stack.Screen name="[id]" /> */}
    </Stack>
  );
}
