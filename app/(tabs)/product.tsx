import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProductScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Product Screen</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
