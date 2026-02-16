import Ionicons from '@expo/vector-icons/Ionicons';
import CheckBox from "expo-checkbox";
import { navigate } from 'expo-router/build/global-state/routing';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Pressable, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function HomeScreen() {
  return (
    <View style={styles.container}>


	<View style={styles.wrapfind}>
		<Image
                style={styles.image}
                source={require('../../assets/images/home/icons/search.png')}></Image>
		<Text style={styles.findtext}>Find All You Need</Text>
        </View>



	<View style={styles.icons}>

		<View style={styles.iconitem}>
			<Image style={styles.iconsize} source={require('../../assets/images/home/icons/star.png')}/>
			<Text style={styles.bluetxt}>Popular</Text>
		</View>
                <View style={styles.iconitem}>
	                <Image style={styles.iconsize} source={require('../../assets/images/home/icons/chair.png')} />
	                <Text style={styles.graytxt}>Chair</Text>
                </View>
                <View style={styles.iconitem}>
	                <Image style={styles.iconsize} source={require('../../assets/images/home/icons/deskic.png')} />
	                <Text style={styles.graytxt}>Table</Text> 
                </View>
                <View style={styles.iconitem}>
	                <Image style={styles.iconsize} source={require('../../assets/images/home/icons/couch.png')} />
	                <Text style={styles.graytxt}>Armchair</Text>
                </View>
                <View style={styles.iconitem}>
                	<Image style={styles.iconsize} source={require('../../assets/images/home/icons/bed.png')} />
         	       <Text style={styles.graytxt}>Bed</Text>
                </View>


	</View>

	<View style={styles.products}>
	 	<Image style={styles.size} source={require('../../assets/images/home/lamp.png')} />
		<Image style={styles.size} source={require('../../assets/images/home/stand.png')}/>
		<Image style={styles.size} source={require('../../assets/images/home/realchair.png')}/>
		<Image style={styles.size} source={require('../../assets/images/home/desk.png')}/>
        </View>



	<View style={styles.foot}>
                <Image style={styles.footsize} source={require('../../assets/images/home/footer/house.png')}/>
                <Link href={'/(tabs)/favorite'}> <Image style={styles.footsize} source={require('../../assets/images/home/footer/tag.png')}/> </Link>
                <Image style={styles.footsize} source={require('../../assets/images/home/footer/person.png')}/>
	</View>
	


    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  findtext: {
    color: "000",
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
	marginRight: 50,
	width: 24,
	height: 24,

  },
  wrapfind: {
    flex: 0.15,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    marginRight: 100,
    marginTop: 35,

  },

  size: {
	width: 157,
	height: 253,

  },
  products: 
  {
	
	flex: 1,
	flexDirection: 'row',
	flexWrap: "wrap",
	justifyContent: 'center',
	gap: 30,
	
  },
  icons: 
  {
	flex: 0.15,
	flexDirection: 'row',	
	gap: 25,
	justifyContent: 'center',
	

  },
  iconsize: 
  {
  	width: 44,
	height: 44


  },
  iconitem: 
  {
	alignItems: 'center'
  },
  bluetxt: 
  {
	color: '#4F63AC',
	textSize: 14
  },
  graytxt: 
  {
	opacity: 0.5

  },
  foot: 
 

  {
	width: 375,
	height: 75,
	backgroundColor: '#FFF',
	flexDirection: 'row',
	gap: 65,
	alignItems: 'center',
	justifyContent: 'center',
	marginBottom: 50
	

  },
  footsize: 

  {
	width: 24,
	height: 24,


  }
  


});

