import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.container}
    >
    <Image 
        style={styles.image} 
        source={require('../assets/images/furn.jpg')} 
	  />
      <Text style={styles.text}>  You'll Find<Text style={styles.text2}>{"\n"}All you need{"\n"}</Text>      Here!
        
        
        </Text>  

      <TouchableOpacity style={styles.butno} onPress={() => navigate('/(auth)/signup')}>
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
    bottom: 100,

    backgroundColor: '#0553',
  },
  text: {
    fontSize: 40,
    bottom: 50
  },
  text2: {
    fontSize: 40,
    color: "#FCA34D",
    textDecorationLine: 'underline'
  },
  button: {
    fontSize: 16,
    color: '#0000',
    top: 75
    
  },
  butno: {
    backgroundColor: '#4F63AC',
    width: 303,
    height: 60,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 45
  },
  butnotext: {
    color: "white",
    fontSize: 16,
    fontWeight: 700,
    fontStyle: 'Monsserrat'
  }

});
