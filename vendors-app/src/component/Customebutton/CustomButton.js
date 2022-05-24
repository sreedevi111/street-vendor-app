import { StyleSheet, Text, Pressable } from 'react-native'
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
        backgroundColor: '#009933',
        width: '80%',
        height: 35,
        padding: 6,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text:{
        fontWeight: 'bold',
        color: 'white'
    }
});