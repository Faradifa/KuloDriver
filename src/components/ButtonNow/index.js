import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'


const ButtonNow = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>Sekarang v</Text>
    </TouchableOpacity>
  )
}

export default ButtonNow;

const styles = StyleSheet.create({
    text: {
        flexDirection: 'row',
        marginLeft: 110,
        fontSize: 16,
    },
});