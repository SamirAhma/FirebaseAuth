import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Email'></TextInput>
     </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})