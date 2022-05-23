import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import Tushar from "../../../assets/Tushar.png";
import { Avatar } from "react-native-paper";
import CustomButton from "../Customebutton/CustomButton";

const User = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Avatar.Image style={{ marginRight: 250 }} size={60} source={Tushar} />

        <CustomInput placeholder="Name" />
        <CustomInput placeholder="Phone Number" />
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Address" />
        <CustomButton text="Save" />
      </View>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  body: {
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
