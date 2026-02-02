import { Button } from "@react-navigation/elements";
import { Image } from 'expo-image';
import { StyleSheet, Text, View, Alert } from "react-native";
import { Link, Stack } from 'expo-router';


export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image 
        style={styles.image} 
        source={require('../assets/images/furn.jpg')} 
	/>
      <Text style={styles.text}>You'll Find {"\n"} All you need {"\n"} Here!</Text>  

      <Link href="/login" style={styles.button}>
        Login
      </Link>

      <Link href="/signup" style={styles.button}>
        Signup
      </Link>
	
    </View>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 357,
    height: 209,

    backgroundColor: '#0553',
  },
  text: {
    fontSize: 40,
  },
  button: {
    fontSize: 50,
    textDecorationLine: 'underline',
    color: '#0000',
  },
});
