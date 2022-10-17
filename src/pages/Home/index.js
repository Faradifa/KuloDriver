import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native'
import React from 'react';
import { Header } from '../../assets/images';
import { Search, ListAddress, SaveAddress, ButtonSaveAddress } from '../../components';

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.page}>
                <ImageBackground source={Header} style={styles.header}>
                    <Text style={styles.judul}>Transportasi</Text>
                    <View style={styles.hello}>
                        <Text style={styles.selamat}>Selamat Datang</Text>
                        <Text style={styles.text1}>Ke mana pun kamu mau pergi, ayo</Text>
                        <Text style={styles.text2}>kita kesana!</Text>
                    </View>
                </ImageBackground>
                <Search />
                <ListAddress />
                <SaveAddress />
                <ButtonSaveAddress navigation={navigation} />
            </View>
        </ScrollView>
    );
};


export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'white',
    },
    page: {
        flex: 1,
    },
    header: {
        width: windowWidth,
        height: windowHeigth * 0.30,
        paddingHorizontal: 30,
    },
    judul: {
        paddingTop: 15,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    hello: {
        marginTop: windowWidth * 0.06,
    },
    selamat: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 5,
        // fontFamily: 'Roboto-Bold',
    },
    text1: {
        color: '#fff',
        paddingTop: 7,
        fontSize: 12,
        // fontFamily: 'Roboto-Light',
    },
    text2: {
        color: '#fff',
        fontSize: 12,
        // fontFamily: 'Roboto-Light',
    },
});