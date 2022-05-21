import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SafeAreaView from 'react-native-safe-area-view'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const VendorDash1 = ({navigation}) => {
  
  return (
     
      <SafeAreaProvider style = {styles.container}>
      <Text style = {styles.title} >There are no items in list. Please add items</Text>
        <Button onPress={()=> navigation.navigate('ItemAddList')} title='ADD +'>  </Button>
      </SafeAreaProvider>
      
     
        
        
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
   

})