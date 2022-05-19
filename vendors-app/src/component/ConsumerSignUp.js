import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import CustomInput from './CustomInput';
import CustomButton from "./Customebutton/CustomButton";
import Logo from '../../assets/Logo.png'

const ConsumerSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState ("");
  const [phoneNumber, setPhoneNumber] = useState ("");

  const onSignUpPressed = () => {
    console.warn("Sign Up");
  };
  const onSignInGoogle = () => {
    console.warn("Googel");
  };
  const onSignInFacebook = () => {
    console.warn("Facebook");
  };


    return (
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.body}>
      
      <Image source={Logo} style={styles.logo} />

      <CustomInput
        placeholder="Full Name"
        value={fullName}
        setValue={setFullName}
      />
       <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />
       <CustomInput
        placeholder="Phone Number"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Register" onPress={onSignUpPressed} />
      <CustomButton
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
      />
      </View>
      </ScrollView>

    );
  
}

export default ConsumerSignUp

const styles = StyleSheet.create({
    body: {
      flex: 1, 
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center",
      
      
    },
    logo: {
      width: 100,
      height: 100,
    }
  });
  
