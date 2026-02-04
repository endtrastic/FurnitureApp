import { Button } from "@react-navigation/elements";
import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import CheckBox from "expo-checkbox";

// https://www.tutorialpedia.org/blog/how-do-you-style-a-textinput-in-react-native-for-password-input/
// https://www.kindacode.com/article/working-with-checkbox-in-react-native



export default function Signup() {
  const [isSecure, setIsSecure] = useState(true); // Track if password is masked
  const [agree, setAgree] = useState(false); 
  return (
    <View style={styles.container}>

      <Text>Name</Text>
      <TextInput style={styles.input} placeholder="John Doe" />

      <Text>E-mail</Text>
      <TextInput style={styles.input} placeholder="example@gmail.com" />


      <View style={styles.inputContainer}>
        <Text>Password</Text>
	<TextInput
          style={styles.input}
          placeholder="********"
          secureTextEntry={isSecure} // Controlled by state
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* Toggle Button */}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsSecure(!isSecure)} // Toggle state on press
        >
          <Ionicons
            name={isSecure ? "eye-off" : "eye"} // Show eye-off when masked, eye when visible
            size={30}
            color="#999"
          />
        </TouchableOpacity>
      </View>
        <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.text}>
          I have read and agreed with the terms and conditions
        </Text>
      </View>
      <Button
        title="Sign Up"
        disabled={!agree}
        onPress={() => {
          /* Do something */
        }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative', // For absolute positioning of the toggle icon
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingRight: 50, // Make space for the toggle icon
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  toggleButton: {
    position: 'absolute',
    right: 18, // Align to the right
    top: '70%',
    transform: [{ translateY: -22 }], // Center vertically (half of input height: 55/2 = 27.5, adjust for icon size)
  },
  container: {
    width: "100%",
    padding: 16,
    paddingTop: 100,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
  },
  text: {
    lineHeight: 30,
    marginLeft: 10,
  },
});
 
