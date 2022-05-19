import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SafeAreaView from 'react-native-safe-area-view'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const VendorDash1 = () => {
  return (
      <>
      <SafeAreaProvider style = {styles.container}>
      <Text style = {styles.title} >There are no items in list. Please add items</Text>
        <Button st title='ADD +'>  </Button>
      </SafeAreaProvider>
      
     
        
        </>
  )
}

export default VendorDash1

const styles = StyleSheet.create({
    container:{
        padding:14,
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: '25px',
        fontWeight: '500'
    }

})