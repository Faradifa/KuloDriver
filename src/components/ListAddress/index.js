import { StyleSheet, Image, Text, View } from 'react-native'
import { Pin } from '../../assets';
import React from 'react'

const ListAddress = () => {
    return (
        <View>
            <View style={styles.listaddress}>
                <Image source={Pin} style={styles.pin}></Image>
                <View style={styles.list1}>
                    <Text style={styles.address}>Ciputra World Surabaya</Text>
                    <Text style={styles.address1}>Jl. Mayjen Sungkono, Dukuhpakis, Kota Surabaya 60224</Text>
                </View>
            </View>
            <View style={styles.listaddress}>
                <Image source={Pin} style={styles.pin}></Image>
                <View style={styles.list1}>
                    <Text style={styles.address}>Royal Plaza Surabaya</Text>
                    <Text style={styles.address1}>Jl. A. Yani No. 16-18, Wonokromo, Kota Surabaya 60243</Text>
                </View>
            </View>
            <View style={styles.listaddress}>
                <Image source={Pin} style={styles.pin}></Image>
                <View style={styles.list1}>
                    <Text style={styles.address}>Pakuwon Mall</Text>
                    <Text style={styles.address1}>Jl. Mayjen, Babatan, Wiyung, Kota Surabaya 60227</Text>
                </View>
            </View>
            {/* <View style={styles.listaddress}>
                <Image source={Pin} style={styles.pin}></Image>
                <View style={styles.list1}>
                    <Text style={styles.address}>Surabaya Zoo</Text>
                    <Text style={styles.address1}>Jl. Setail, Darmo, Wonokromo, Kota Surabaya 60241</Text>
                </View>
            </View> */}
            <View style={styles.listaddress}>
                <Image source={Pin} style={styles.pin}></Image>
                <View style={styles.list1}>
                    <Text style={styles.address}>Kenjeran Park</Text>
                    <Text style={styles.address1}>Jl. Sukolilo Baru, Bulak, Kota Surabaya 60122</Text>
                </View>
            </View>
        </View>
    )
};

export default ListAddress;

const styles = StyleSheet.create({
    listaddress: {
        flexDirection: 'row',
        marginLeft: 50,
        marginTop: 23,
    },
    pin: {
        marginTop: 5,
    },
    list1: {
        marginLeft: 10,
    },
    address: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    address1: {
        fontSize: 11,
    },
});