import Ionicons from '@expo/vector-icons/Ionicons';
import CheckBox from "expo-checkbox";
import { navigate } from 'expo-router/build/global-state/routing';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text type="title">This is the product page</Text>
      <Link href="/" dismissTo style={styles.link}>
        <Text type="link">Go to home screen</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
