import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const ButtonDash = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.Button}>
        <TouchableOpacity style={styles.round1}>
          <Text> Go Live</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.round2}>
          <Text onPress={()=>{navigation.navigate("ItemAddList")}}> Add</Text>
        </TouchableOpacity>
      </View>
  )
}

export default ButtonDash

const styles = StyleSheet.create({
    Button: {
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "space-around",
       position: 'relative',


      },
      round1: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'flex-end',
        padding: 5,
        borderRadius: 100,
        backgroundColor: "green",
      },
      round2: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'flex-end',
        padding: 5,
        borderRadius: 100,
        backgroundColor: "orange",
      },
})