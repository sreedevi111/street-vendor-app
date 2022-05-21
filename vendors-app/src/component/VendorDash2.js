import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
// import MyDrawer from '../storage/VendorDrawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MyDrawer from '../storage/VendorDrawer'

const VendorDash2 = (navigation) => {
  return (
    <SafeAreaProvider>
      
        {/* <MyDrawer/>
        <View style={styles.Button}>
        <TouchableOpacity style={styles.round1}>
          <Text> Go Live</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.round2}>
          <Text> Add</Text>
        </TouchableOpacity>
      </View> */}

<View style={styles.container}>
  
       
       
       <View style={styles.RectangleShapeView} >
       <Text>
    {navigation.getParam('item')}
    </Text>
       </View>
       
     </View>
    </SafeAreaProvider>
    
  )
}

export default VendorDash2

const styles = StyleSheet.create({
  container: {
 
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
  
  RectangleShapeView: {
 
    marginTop : '30%',

  width: 150*2,
  height: 130,
  backgroundColor: '#FFC107'
 
  }

})