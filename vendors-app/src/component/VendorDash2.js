import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyDrawer from '../storage/VendorDrawer'

const VendorDash2 = () => {
  return (
    <View style = {styles.container}>
      
      <View style = {styles.header}>
        <MyDrawer/>
      <Text style ={styles.title}>My Dashboard</Text>
      </View>
      
    </View>
  )
}

export default VendorDash2

const styles = StyleSheet.create({
  container:{
backgroundColor: 'red'
  },
  header:{
    height:80,
    paddingTop:0,
    backgroundColor: 'coral'
  },
  title:{
    textAlign: 'center',
    backgroundColor: 'blue'
  }
})