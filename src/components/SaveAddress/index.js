import { StyleSheet, Text, Image, View } from 'react-native'
import { Saveaddress } from '../../assets/images';
import React from 'react'

const SaveAddress = () => {
    return (
        <View>
            <View style={styles.save}>
                <Image source={Saveaddress} style={styles.saveaddress}></Image>
                <Text style={styles.SA}>Simpan alamat, pesen lebih cepat</Text>
                <Text style={styles.SA1}>Ada alamat yang sering dipakai? Simpan yuk, biar</Text>
                <Text style={styles.SA1}>gak ribet ketik alamat lagi</Text>
            </View>
        </View>
    )
};

export default SaveAddress;

const styles = StyleSheet.create({
    save: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    SA: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: 'bold',
    },
    SA1: {
        fontSize: 12,
    },
});