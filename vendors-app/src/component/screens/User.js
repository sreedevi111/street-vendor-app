import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import Tushar from "../../../assets/Tushar.png";
import { Avatar } from "react-native-paper";
import CustomButton from "../Customebutton/CustomButton";
import * as ImagePicker from "expo-image-picker";

const User = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <TouchableOpacity onPress={pickImage}>
          {image && (
            <Avatar.Image
              source={{ uri: image }}
              style={{ width: 60, height: 60 }}
            />
          ) ? (
            <Avatar.Image
              source={{ uri: image }}
              style={{ width: 60, height: 60 }}
            />
          ) : (
            <Avatar.Image
              style={{ marginRight: 250 }}
              size={60}
              source={Tushar}
              onPress={pickImage}
            />
          )}
        </TouchableOpacity>

        {/* <Avatar.Image
          style={{ marginRight: 250 }}
          size={60}
          source={Tushar}
          onPress={pickImage}
        /> */}

        <CustomInput placeholder="Name" />
        <CustomInput placeholder="Phone Number" />
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Address" />
        <CustomButton text="Save" />
        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
        {/* {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )} */}
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
