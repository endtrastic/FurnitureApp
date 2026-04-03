import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Signup() {
  const [isSecure, setIsSecure] = useState(true);
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (!agree) {
      Alert.alert('Error', 'You must agree to Terms & Privacy.');
      return;
    }

    // Navigate to home after success
    router.push('/home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Image
            style={styles.image}
            source={require('../../assets/images/icon.png')}
          />
        </Pressable>

        <Text style={styles.imgtxt}>Sign Up</Text>
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
          placeholder="**********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isSecure}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setIsSecure(!isSecure)}
        >
          <Ionicons name={isSecure ? 'eye-off' : 'eye'} size={24} color="#999" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.checkboxRow}
        onPress={() => setAgree(!agree)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, agree && styles.checkboxChecked]}>
          {agree && <Ionicons name="checkmark" size={14} color="#fff" />}
        </View>
        <Text style={styles.checkboxLabel}>
          I agree with <Text style={styles.bold}>Terms</Text> &{' '}
          <Text style={styles.bold}>Privacy</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !agree && styles.buttonDisabled]}
        disabled={!agree}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Or sign up with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.googleWrap}>
        <Pressable onPress={() => {}}>
          <Image
            source={require('../../assets/images/googlebut.png')}
            style={styles.googleImage}
            resizeMode="contain"
          />
        </Pressable>
      </View>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.bold} onPress={() => router.push('/login')}>
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 40,
  },
  image: {
    width: 20,
    height: 20,
  },
  imgtxt: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4F63AC',
    marginLeft: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    color: '#4F63AC',
    marginBottom: 6,
    marginTop: 16,
    marginLeft: 4,
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
    marginBottom: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingRight: 12,
    marginBottom: 4,
  },
  eyeButton: {
    padding: 8,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 24,
    paddingLeft: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#4F63AC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#4F63AC',
  },
  checkboxLabel: {
    color: '#4F63AC',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
    color: '#4F63AC',
  },
  button: {
    backgroundColor: '#4F63AC',
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DADADA',
  },
  dividerText: {
    color: '#4F63AC',
    marginHorizontal: 10,
  },
  googleWrap: {
    alignItems: 'center',
    marginBottom: 24,
  },
  googleImage: {
    width: 142,
    height: 60,
  },
  footerText: {
    color: '#4F63AC',
    textAlign: 'center',
    paddingBottom: 40,
  },
});