import { Button } from "@react-navigation/elements";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'; 


export default function Login() {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text>Name</Text>
    <TextInput style={styles.input} placeholder="John Doe" />
	
    <Text>E-mail</Text>
    <TextInput style={styles.input} placeholder="example@gmail.com" />

    <Text>Password</Text>
    <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry={true} // Enables masking
        keyboardType="default" // Avoid numeric keyboards for passwords
        autoCapitalize="none" // Disable auto-capitalization
        autoCorrect={false} // Disable autocorrect for passwords
	
     />
     <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsSecure(!isSecure)} // Toggle state on press
     >
          <Ionicons
            name={isSecure ? "eye-off" : "eye"} // Show eye-off when masked, eye when visible
            size={24}
            color="#999"
          />
     </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },

});
