import { Stack } from "expo-router";

export default function TabsLayout() {

    return (
      <Stack>
        <Stack.Screen name="home" options={{ title: 'Home', headerShown: false }} />
	<Stack.Screen name="product" options={{ title: 'Product', headerShown: false}}/>
	<Stack.Screen name="favorite" options={{ title: 'Favorite', headerShown: false}} />
      </Stack>
    );
}
