import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Product = { id: string; title: string; price: number; image: string; };

const products: Product[] = [
  { id: "1", title: "Minimal Wooden Stand", price: 12.0, image: require("../../assets/images/home/lamp.png") },
  { id: "2", title: "Modern Lamp", price: 35.0, image: require("../../assets/images/home/stand.png") },
  { id: "3", title: "Comfortable Chair", price: 120.0, image: require("../../assets/images/home/realchair.png") },
  { id: "4", title: "Glass Coffee Table", price: 80.0, image: require("../../assets/images/home/desk.png") },
];

export default function MyListings() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Listings</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {products.map((product) => (
          <View key={product.id} style={styles.item}>
            <View style={styles.itemRow}>
              <Image source={product.image} style={styles.itemImage} resizeMode="cover" />
              <View>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
              </View>
            </View>
            <Feather name="trash" size={24} color="black" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
    paddingVertical: 20,
    gap: 25,
  },
  itemRow: {
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    color: '#333',
    fontSize: 14,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
});
