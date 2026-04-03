import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const CATEGORIES = ['Electronics', 'Furniture', 'Clothing'];

export default function CreateListingScreen() {
  const router = useRouter();
  const [listingTitle, setListingTitle] = useState('');
  const [listingPrice, setListingPrice] = useState('');
  const [listingDescription, setListingDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create a New Listing</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.label}>Upload Photos</Text>
        <TouchableOpacity style={styles.photoUploadContainer}>
          <Ionicons name="camera-outline" size={50} color="#AAAAAA" />
          <Text style={styles.photoPrompt}>Tap to upload</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Listing Title"
          value={listingTitle}
          onChangeText={setListingTitle}
        />

        <Text style={styles.label}>Category</Text>
        <TouchableOpacity
          style={styles.categorySelector}
          onPress={() => setCategoryDropdownOpen(!isCategoryDropdownOpen)}
        >
          <Text style={{ color: selectedCategory ? '#333' : '#AAAAAA' }}>
            {selectedCategory || 'Select the category'}
          </Text>
          <Ionicons name="chevron-down-outline" size={20} color="#333" />
        </TouchableOpacity>

        {isCategoryDropdownOpen && (
          <View style={styles.categoryDropdown}>
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category}
                style={styles.categoryOption}
                onPress={() => {
                  setSelectedCategory(category);
                  setCategoryDropdownOpen(false);
                }}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter price in USD"
          value={listingPrice}
          onChangeText={setListingPrice}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Tell us more..."
          value={listingDescription}
          onChangeText={setListingDescription}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => router.push('/(profile)/my-listings')}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

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
    paddingBottom: 100,
  },

  label: {
    color: '#4F63AC',
    marginBottom: 6,
    marginTop: 16,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },

  multilineInput: {
    height: 120,
    paddingTop: 14,
    textAlignVertical: 'top',
  },

  categorySelector: {
    height: 55,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  categoryDropdown: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    marginTop: 4,
    overflow: 'hidden',
  },

  categoryOption: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  categoryText: {
    fontSize: 16,
    color: '#333',
  },

  photoUploadContainer: {
    height: 120,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  photoPrompt: {
    color: '#AAAAAA',
    fontSize: 14,
  },

  submitButton: {
    backgroundColor: '#4F63AC',
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },

  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});