import { Stack } from "expo-router";

export default function ProfileLayout() {

    return (
      <Stack>
        <Stack.Screen name="profile" options={{ title: 'Profile', headerShown: false }} />
	<Stack.Screen name="settings" options={{ title: 'Settings', headerShown: false}}/>
      </Stack>
    );
}
