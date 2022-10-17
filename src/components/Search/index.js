import { StyleSheet, Image, Text, View, Dimensions } from 'react-native'
import { Lokasi } from '../../assets';
import React from 'react';
import ButtonNow from '../ButtonNow';

const Search = () => {
    return (
        <View style={styles.container}>
            <Image source={Lokasi} style={styles.lokasi}></Image>
            <Text style={styles.text}>Mau Kemana?</Text>
            <View style={styles.buttonAksi}>
                <ButtonNow />
            </View>
        </View>
    );
};

export default Search;

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: -windowHeigth * 0.04,
        flexDirection: 'row',

    },
    text: {
        fontSize: 16,
        marginLeft: 12,
        fontWeight: 'bold',
    },
    lokasi: {
        marginTop: 2,
    },
});