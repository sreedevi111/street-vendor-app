import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import CustomInput from "./CustomInput/CustomInput";
import CustomButton from "./Customebutton/CustomButton";
import CustomMap from "./CustomeMap/CustomMap";
import Logo from '../../assets/Logo.png'
import { Avatar } from 'react-native-paper'


const VendorSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSavePressed = () => {
    console.warn("Data Saved");
  };
  // const onSignInGoogle = () => {
  //   console.warn("Googel");
  // };
  // const onSignInFacebook = () => {
  //   console.warn("Facebook");
  // };

  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.body}>
    {/* <Image source={Logo} style={styles.logo} /> */}
    <Avatar.Image source={Logo}/>

      <CustomInput
        placeholder="Full Name"
        value={fullName}
        setValue={setFullName}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Phone Number"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      <CustomInput
        placeholder="Address"
        value={city}
        setValue={setCity}
        // secureTextEntry={true}
      />
     <CustomMap />
      <CustomButton text="Save" onPress={onSavePressed} 

/> 
      {/* <CustomButton
        text="Sign in with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      /> */}
    </View>
    // </ScrollView>
  );
};

export default VendorSignUp;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
