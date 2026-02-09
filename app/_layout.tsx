import { Stack } from "expo-router";

export default function RootLayout() {

    return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Index', headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ title: 'Authentication', headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ title: 'Tabs', headerShown: false}} />
        <Stack.Screen name="(profile)" options={{titile: 'Profile', headerShown: false}} />
      </Stack>
    );
}
