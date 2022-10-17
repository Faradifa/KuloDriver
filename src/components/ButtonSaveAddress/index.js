import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, Button } from 'react-native'
import React from 'react'
import { AddFavAddress } from '../../pages';

const ButtonSaveAddress = ({ navigation }) => {

    const navigateTo = async (page) => {
        navigation.navigate(page)
    }

    return (
        <View >
            <TouchableOpacity style={styles.container} onPress={() => navigateTo('app-favaddress')}>
                <Text>Simpan Rumah</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text>Simpan Kantor</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.AddFavAddress}>
                <Text>Press Here</Text>
            </TouchableOpacity>
            <Button title="de me" onPress={() => AddFavAddress} />
            <View style={styles.fixToText}>
                <Button
                    title="Left button"
                    onPress={AddFavAddress}
                />
                <Button
                    title="Right button"
                    onPress={() => Alert.alert('Right button pressed')}
                />
            </View>
        </View>
    )
}

export default ButtonSaveAddress;

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: windowHeigth * 0.02,
        marginBottom: 5,
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "5%",
        textAlign: "center",
        alignSelf: "flex-start",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
});