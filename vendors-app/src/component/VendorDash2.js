import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";
// import MyDrawer from '../storage/VendorDrawer'
import NoteLists from "./NoteList";
import ButtonDash from "./ButtonDash";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

const VendorDash2 = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <MyDrawer/> */}
        <Text style={styles.title}>My Dashboard</Text>

        <NoteLists />

        <ButtonDash/>
        
      </View>
    </View>
  );
};

export default VendorDash2;

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
  },
  // list:{
  //   backgroundColor: 'pink',
  //   width: '90%',
  //   height: 100,
  //   marginTop: 30,
  //   marginLeft:8

  // },
  
});
