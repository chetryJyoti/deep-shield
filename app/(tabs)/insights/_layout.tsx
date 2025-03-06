import { Stack } from "expo-router";

export default function InsightsLayout() {
  return (
    <Stack>
      <Stack.Screen name="insights" options={{ headerShown: false }} />
    </Stack>
  );
}
