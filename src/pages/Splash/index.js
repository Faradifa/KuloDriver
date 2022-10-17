import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { BgSplash, LogoSplash } from '../../assets'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout( () => {
      navigation.replace('Home');
    }, 3000)
  }, [navigation]);

  return (
    <ImageBackground source={BgSplash} style={styles.background}>
      <Image source={LogoSplash} style={styles.logo} />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 208,
    height: 212
  }
})
