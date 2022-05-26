import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
// import CustomInput from "./CustomInput/Index";
import CustomInput from "./CustomInput/CustomInput";
import CustomButton from "./Customebutton/CustomButton";
import Logo from "../../assets/Logo.png";
import { Avatar } from "react-native-paper";
import CustomMap from "./CustomeMap/CustomMap";

const ConsumerSignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // const onSavePressed = () => {
  //   console.warn("Data Save");
  // };
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
        // secureTextEntry={true}
      />
      <CustomMap />
      <CustomButton
        text="Save"
        onPress={() => navigation.navigate("ConsumerHomePage")}
      />
      {/* <CustomButton
        text="Sign in with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      onPress={onSavePressed}
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      /> */}
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
