import Ionicons from '@expo/vector-icons/Ionicons';
import CheckBox from "expo-checkbox";
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// https://www.tutorialpedia.org/blog/how-do-you-style-a-textinput-in-react-native-for-password-input/
// https://www.kindacode.com/article/working-with-checkbox-in-react-native




export default function Signup() {
  const [isSecure, setIsSecure] = useState(true); // Track if password is masked
  const [agree, setAgree] = useState(false); 


  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Link href={'/'}><Image 
                style={styles.image} 
                source={require('../../assets/images/icon.png')}/>
        </Link>

        <Link href={"/"} style={styles.imgtxt}>Sign Up</Link>
      </View>


      
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.input} placeholder="John Doe"/>

      <Text style={styles.text}>E-mail</Text>
      <TextInput style={styles.input} placeholder="example@gmail.com" />


      <View style={styles.inputContainer}>
        <Text style={styles.text}>Password</Text>
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
        <Text style={styles.checktext}>
          I agree with <Text style={styles.boldtext}>Terms</Text> & <Text style={styles.boldtext}>Privacy</Text>
        </Text>
      </View>



      <TouchableOpacity style={styles.butno} disabled={!agree} >
        <Text style={styles.butnotext}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.textsign}>Or sign up with</Text>

      <Link href={'/'}><Image 
        style={styles.googleimg} 
        source={require('../../assets/images/googlebut.png')}/>
      </Link>

      <View style={styles.wrap}>
        <Text style={styles.acctext}>Already have an account?</Text> <Text style={styles.boldtext}> Sign in</Text>
      </View>


    </View>
  );
};
 
const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative', // For absolute positioning of the toggle icon
    paddingBottom: 25,
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
    top: '75%',
    transform: [{ translateY: -22 }], // Center vertically (half of input height: 55/2 = 27.5, adjust for icon size)
  },
  container: {
    width: "100%",
    padding: 16,
    paddingTop: 100,
    backgroundColor: '#FFF'
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
    alignItems: 'center',
    paddingLeft: 30
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
    fontWeight: 700,
    fontStyle: 'Monsserrat',
  },
  imgtxt: {
    fontSize: 26,
    fontWeight: 600,
    color: '#4F63AC',
    marginLeft: 10,

  },
  image: {
    width: 20,
    height: 20,
  },
  googleimg: {
    width: 142,
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 15,
  },
  checktext: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4F63AC',
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
    alignSelf: 'center'
    

  },
  acctext: {
    color: '#4F63AC',


  }


});
 
