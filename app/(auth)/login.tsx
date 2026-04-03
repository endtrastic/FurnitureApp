import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [isSecure, setIsSecure] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    // Navigate to home after success
    navigate('/(tabs)/home');
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Link href={'/'}>
          <Image 
            style={styles.image} 
            source={require('../../assets/images/icon.png')}
          />
        </Link>

        <Link href={"/"} style={styles.imgtxt}>Sign In</Link>
      </View>

      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isSecure}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsSecure(!isSecure)}
        >
          <Ionicons
            name={isSecure ? "eye-off" : "eye"}
            size={30}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.butno} onPress={handleSignIn}>
        <Text style={styles.butnotext}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.strike}>
        <View style={styles.rect}></View>
        <Text style={styles.textsign}>Or sign in with</Text>
        <View style={styles.rect}></View>
      </View>

      <View style={styles.googlewrap}>
        <Link href="/" asChild>
          <Pressable>
            <Image
              source={require('../../assets/images/googlebut.png')}
              style={styles.googleimg}
              resizeMode="contain"
            />
          </Pressable>
        </Link>
      </View>

      <View style={styles.wrap}>
        <Text style={styles.acctext}>
          Don't have an account?{' '}
          <Link href="/signup" style={styles.boldtext}>
            Sign Up
          </Link>
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    paddingBottom: 25,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingRight: 50,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  toggleButton: {
    position: 'absolute',
    right: 18,
    top: '75%',
    transform: [{ translateY: -22 }],
  },
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
    paddingTop: 100,
    backgroundColor: '#FFF'
  },
  strike: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  rect: {
    width: 90,
    backgroundColor: '#DADADA',
    height: 1,
    marginVertical: 16
  },
  text: {
    color: '#4F63AC',
    lineHeight: 30,
    marginLeft: 10,
    paddingTop: 20
  },
  boldtext: {
    fontWeight: 'bold',
    color: '#4F63AC',
  },
  butno: {
    backgroundColor: '#4F63AC',
    width: 303,
    height: 60,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  butnotext: {
    color: "white",
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'Monsserrat',
  },
  imgtxt: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4F63AC',
    marginLeft: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  googlewrap: {
    display: 'flex',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25
  },
  googleimg: {
    width: 142,
    height: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 15,
  },
  textsign: {
    color: '#4F63AC',
    alignSelf: 'center',
    paddingVertical: 25
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 70,
    alignItems: 'center',
    alignSelf: 'center',
  },
  acctext: {
    color: '#4F63AC',
  }
});