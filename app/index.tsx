import { Button } from "@react-navigation/elements";
import { Image } from 'expo-image';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from "react-native";
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

      <TouchableOpacity style={styles.butno} onPress={() => navigation.navigate('login')}>
        <Text style={styles.butnotext}>Sign up</Text>
      </TouchableOpacity>
	
      <Link href="/login" style={styles.button}>Sign in </Link>

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
    fontSize: 16,
    color: '#0000',
    
  },
  butno: {
    backgroundColor: '#4F63AC',
    width: 303,
    height: 60,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'  
  },
  butnotext: {
    color: "white",
    fontSize: 16,
    fontWeight: 700,
    fontStyle: 'Monsserrat'
  }

});
