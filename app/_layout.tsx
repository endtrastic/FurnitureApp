import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
    const router = useRouter();
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(profile)" options={{ headerShown: false }} />
            <Stack.Screen name="new-listing" options={{ headerShown: false }} />
            <Stack.Screen
                name="product/[id]"
                options={{
                    headerTitle: "",
                    headerTransparent: true,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={{
                                padding: 12,
                                marginLeft: 10,
                                marginTop: 40,
                                borderRadius: 6,
                                backgroundColor: "#fff",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <FontAwesome6 name="chevron-left" size={15} color="#4F63AC" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}