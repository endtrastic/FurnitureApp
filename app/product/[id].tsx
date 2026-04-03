import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export const products = [
  {
    id: "1",
    title: "Minimal Wooden Stand",
    price: 12.0,
    description: "Minimal Stand is made of natural wood. Simple and elegant design, perfect for your home or office. Available in three colors.",
    image: require("../../assets/images/home/lamp.png"),
  },
  {
    id: "2",
    title: "Modern Lamp",
    price: 35.0,
    description: "A modern lamp with adjustable brightness and a minimalist design. Ideal for desks and bedside tables.",
    image: require("../../assets/images/home/stand.png"),
  },
  {
    id: "3",
    title: "Comfortable Chair",
    price: 120.0,
    description: "Ergonomic and stylish chair with soft cushioning. Perfect for long hours of work or study.",
    image: require("../../assets/images/home/realchair.png"),
  },
  {
    id: "4",
    title: "Glass Coffee Table",
    price: 80.0,
    description: "Sleek glass coffee table with metal legs. Adds a modern touch to your living room.",
    image: require("../../assets/images/home/desk.png"),
  },
];

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.main}>
        <Text style={styles.notFound}>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <Image source={product.image} style={styles.image} contentFit="cover" />
      <View style={styles.textCont}>
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.actionRow}>
          <TouchableOpacity>
            <Ionicons
              name="bookmark"
              size={24}
              color="#4F63AC"
              style={styles.bookmarkIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Seller</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff"
  },
  image: {
    ...StyleSheet.absoluteFillObject,  
    width: "100%",
    height: "70%",
  },
  textCont: {
    width: "100%",
    padding: 40,
    paddingBottom: 80,
    gap: 50,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "Georgia",
    color: "#222",
    marginBottom: 4,
  },
  price: {
    fontSize: 30,
    fontFamily: "sans-serif",
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: "sans-serif",
    color: "#555",
  },
  actionRow: {
    flexDirection: "row",
    height: 60,
    gap: 10,
  },
  bookmarkIcon: {
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderRadius: 8,
    padding: 20,
  },
  contactButton: {
    flex: 1,
    backgroundColor: "#4F63AC",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  notFound: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginTop: 40,
  },
});
