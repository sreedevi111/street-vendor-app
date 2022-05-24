
import React, { useState, useRef } from "react";
import {
 StyleSheet,
 View,
 TouchableOpacity,
 Text,
} from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import { Colors } from "react-native/Libraries/NewAppScreen";
import PhoneInput from "react-native-phone-number-input";
// import {sendSmsVerification} from "../api/verify"
import { sendSmsVerification } from '../../api/verify'

const Home = ({ navigation }) => {
 const [value, setValue] = useState("");
 const [formattedValue, setFormattedValue] = useState("");
 const phoneInput = useRef(null);

 return (
   <>
     <View style={styles.container}>
       <SafeAreaView style={styles.wrapper}>
         <Text style = {styles.intro}>Street Vendors App</Text>
         <View style={styles.welcome}>
           <Text>Login using mobile number</Text>
         </View>
         <PhoneInput
           ref={phoneInput}
           defaultValue={value}
           defaultCode="IN"
           layout="first"
           onChangeText={(text) => {
             setValue(text);
           }}
           onChangeFormattedText={(text) => {
             setFormattedValue(text);
           }}
          //  countryPickerProps={{ withAlphaFilter: true }}
          //  withShadow
          //  autoFocus
         />
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             // TODO - send SMS!
             sendSmsVerification(formattedValue).then((sent) => {
              navigation.navigate("Otp", { phoneNumber: formattedValue });
            });
           }}
         >
           <Text style={styles.buttonText}>Continue</Text>
         </TouchableOpacity>
       </SafeAreaView>
     </View>
   </>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: Colors.lighter,
 },

 wrapper: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },

 intro:{
    fontSize: 40,
 },

 button: {
   marginTop: 20,
   height: 50,
   width: 300,
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#7CDB8A",
   shadowColor: "rgba(0,0,0,0.4)",
   shadowOffset: {
     width: 1,
     height: 5,
   },
   shadowOpacity: 0.34,
   shadowRadius: 6.27,
   elevation: 10,
 },

 buttonText: {
   color: "white",
   fontSize: 14,
 },

 welcome: {
   padding: 20,
 },

 status: {
   padding: 20,
   marginBottom: 20,
   justifyContent: "center",
   alignItems: "flex-start",
   color: "gray",
 },
});

export default Home;
