import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";



type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    title: "Modern Lamp",
    price: 35.0,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
  },
  {
    id: "2",
    title: "Minimal Wooden Stand",
    price: 12.0,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
  },
  {
    id: "3",
    title: "Comfortable Chair",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400",
  },
  {
    id: "4",
    title: "Glass Coffee Table",
    price: 80.0,
    image: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=400",
  },
];


function FavouriteItem({ product, type }: { product: Product; type?: string }) {
  return (
    <View style={styles.favouriteItem}>
      <View style={styles.favouriteRow}>
        <Image
          source={{ uri: product.image }}
          style={{ width: 100, height: 100, borderRadius: 10 }}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
      </View>

      {type === "fav" ? (
        <Ionicons name="close-circle-outline" size={24} color="#4F63AC" />
      ) : (
        <Feather name="trash" size={24} color="black" />
      )}
    </View>
  );
}

export default function Favourites() {
  return (
    <View style={styles.container}>

       <View style={styles.wrapfind}>
         <Text style={styles.findtext}>My Favourites</Text>
        </View>


      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {products.map((product) => (
          <FavouriteItem key={product.id} product={product} type="fav" />
        ))}
      </ScrollView>

	<View style={styles.foot}>
	  <Link href={'/(tabs)/home'}>
	    <Image
	      style={[styles.footsize, { tintColor: '#AAAAAA' }]}
	      source={require('../../assets/images/home/footer/house.png')}
	    />
	  </Link>
	  <Image
	    style={[styles.footsize, { tintColor: '#4F63AC' }]}
	    source={require('../../assets/images/home/footer/tag.png')}
	  />
	  <Link href={'/(tabs)/profile'}>
	    <Image
	      style={[styles.footsize, { tintColor: '#AAAAAA' }]}
	      source={require('../../assets/images/home/footer/person.png')}
	    />
	  </Link>
	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  wrapfind: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 16,
    width: '100%',
  },  
  headerImage: {
    width: 24,
    height: 24,
  },
  findtext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  favouriteItem: {
    flex: 1,
    flexDirection: "row",
    gap: 25,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favouriteRow: {
    flexDirection: "row",
    gap: 25,
    alignItems: 'center',
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
  foot: {
    width: 375,
    height: 75,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    gap: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  footsize: {
    width: 24,
    height: 24,
  },
});
