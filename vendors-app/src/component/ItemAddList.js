import { StyleSheet, Text, View, Alert, Button } from "react-native";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./Customebutton/CustomButton";
import db from "../../firebase";

const ItemAddList = ({ navigation }) => {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const anotherFunc = (val) =>{
    setItem('');
}


  const onSaved = () => {
    const usersRef = db.collection("users");
    usersRef.doc(item).set({ item, unit, price });

    setItem("");
    setUnit("");
    setPrice("");
  };

  return (
    <View style={styles.body}>
      <Text>Item Add List</Text>
      <CustomInput placeholder="Item" setValue={(val) => setItem(val)} />

      {/* Add photo  */}

      <CustomInput
        placeholder="Description"
        onChangeText={(val) => setDescription(val)}
      />

      <CustomInput placeholder="Unit" setValue={(val) => setUnit(val)} />

      <CustomInput
        keyboardType="numeric"
        placeholder="Price per Unit"
        setValue={(val) => setPrice(val)}
      />
      <CustomButton
        text="Save"
        onPress={() => {
          onSaved();
          Alert.alert("Item Saved successfully");
          navigation.navigate("VendorDash2");
        }}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
    </View>
  );
};

export default ItemAddList;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    alignContent: "center",
  },
});
