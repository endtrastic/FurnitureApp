import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.wrapfind}>
                <View style={{ width: 24 }} />
                <Text style={styles.findtext}>Profile</Text>
                <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                    <Image
                        style={[styles.footsize, { tintColor: '#4F63AC' }]}
                        source={require('../../assets/images/home/icons/exit.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <View style={styles.topSection}>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Elina Hovakimyan</Text>
                        <Text style={styles.userEmail}>hello@gmail.com</Text>
                    </View>
                    <View style={styles.links}>
                        <TouchableOpacity style={styles.linkBlock} onPress={() => router.push('/(profile)/my-listings')}>
                            <View>
                                <Text style={styles.linkLabel}>My Listings</Text>
                                <Text style={styles.linkDesc}>Already have 10 listings</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#4F63AC" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.linkBlock} onPress={() => router.push('/(profile)/settings')}>
                            <View>
                                <Text style={styles.linkLabel}>Settings</Text>
                                <Text style={styles.linkDesc}>Account, FAQ, Contact</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#4F63AC" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => router.push('/new-listing')}>
                    <Text style={styles.buttonText}>Add a new listing</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.foot}>
                <Link href={'/(tabs)/home'}>
                    <Image style={[styles.footsize, { tintColor: '#AAAAAA' }]} source={require('../../assets/images/home/footer/house.png')} />
                </Link>
                <Link href={'/(tabs)/favorite'}>
                    <Image style={[styles.footsize, { tintColor: '#AAAAAA' }]} source={require('../../assets/images/home/footer/tag.png')} />
                </Link>
                <Image style={[styles.footsize, { tintColor: '#4F63AC' }]} source={require('../../assets/images/home/footer/person.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
        alignItems: 'center' 
    },
    wrapfind: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 60,
        marginBottom: 16,
        width: '100%',
        paddingHorizontal: 24,
    },
    findtext: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#000' 
    },
    main: { 
        flex: 1, 
        width: '100%', 
        paddingHorizontal: 24, 
        justifyContent: 'space-between' 
    },
    topSection: {
         gap: 20 
    },
    userInfo: {
        marginTop: 20 
    },
    userName: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#333' 
    },
    userEmail: { 
        color: '#808080', marginTop: 4 
    },
    links: { 
        gap: 12 
    },
    linkBlock: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 16, 
        borderRadius: 12, 
        backgroundColor: '#ffffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6, 
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 10, 
        // shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05,
        // shadowRadius: 8, elevation: 2,
    },
    linkLabel: { 
        fontSize: 16, fontWeight: '600', color: '#4F63AC' 
    },
    linkDesc: { 
        fontSize: 13, color: '#808080', marginTop: 2 
    },
    button: {
        backgroundColor: '#4F63AC', 
        height: 60, 
        borderRadius: 10,
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 20,
    },
    buttonText: { 
        color: '#fff', fontSize: 16, fontWeight: '700' 
    },
    foot: { 
        width: 375, 
        height: 75, 
        backgroundColor: '#FFF', 
        flexDirection: 'row', 
        gap: 65, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 50 
    },
    footsize: { 
        width: 24, 
        height: 24 
    },
});