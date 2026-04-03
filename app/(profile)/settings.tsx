import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Ionicons name="create-outline" size={24} color="#4F63AC" />
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>Bruno Pham</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>bruno203@gmail.com</Text>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 32, marginBottom: 8 }]}>Help Center</Text>
        {['FAQ', 'Contact us', 'Privacy & Terms'].map((item) => (
          <TouchableOpacity key={item} style={styles.linkBlock}>
            <Text style={styles.linkLabel}>{item}</Text>
            <Ionicons name="chevron-forward" size={20} color="#4F63AC" />
          </TouchableOpacity>
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
    paddingHorizontal: 24,
    paddingBottom: 32,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#909191',
  },

  infoBlock: {
    paddingVertical: 16,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
  },

  infoLabel: {
    fontSize: 13,
    color: '#808080',
  },

  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F63AC',
    marginTop: 4,
  },

  linkLabel: {
    fontSize: 16,
    color: '#4F63AC',
  },

  linkBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#ffffffff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6, 
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 10, 
  },
});
