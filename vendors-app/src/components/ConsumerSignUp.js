import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ConsumerLogin = () => {

    return (
      <View style={styles.body}>
        <Text> This is consumer login page </Text>
      </View>
    );
  
}

export default ConsumerLogin

const styles = StyleSheet.create({
    body: {
      flex: 1, 
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center",
      
      
    },
  });
  
