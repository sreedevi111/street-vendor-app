import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} 
    style={[styles.container,
        bgColor ? {backgroundColor: bgColor} : {},
    ]}>
      <Text style={[
          styles.text,
          fgColor ? {color: fgColor} : {},
    ]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '80%',
        height: 25,
        padding: 3,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text:{
        fontWeight: 'bold',
        color: 'white'
    }
});