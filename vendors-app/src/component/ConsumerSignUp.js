import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import CustomInput from "./CustomInput";
import CustomButton from "./Customebutton/CustomButton";
import Logo from "../../assets/Logo.png";
import { Avatar } from "react-native-paper";


const ConsumerSignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.body}>
      <Avatar.Image source={Logo} />

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
        
      />
     
      <CustomButton
        text="Save"
        onPress={() => navigation.navigate("ConsumerHomePage")}
      />
    </View>
  );
};

export default ConsumerSignUp;

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
  },
});
