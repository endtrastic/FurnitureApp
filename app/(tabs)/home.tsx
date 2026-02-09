import Ionicons from '@expo/vector-icons/Ionicons';
import CheckBox from "expo-checkbox";
import { navigate } from 'expo-router/build/global-state/routing';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.findtext}>Find All You Need</Text>


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
  findtext: {
    color: "000",
  }

});

