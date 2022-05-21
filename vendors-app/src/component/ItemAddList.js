import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./Customebutton/CustomButton";

const ItemAddList = ({ navigation }) => {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState({
    sellingItem: "",
    sellingUnit: "",
    sellingPrice: "",
  });

  // const onSaved = () => alert(" Item is Saved");
  const onSaved = () => {
    setState({
      sellingItem: item,
      sellingUnit: unit,
      sellingPrice: price,
    });
  };

  return (
    <View style={styles.body}>
      <Text>Item Add List</Text>
      <CustomInput placeholder="Item" value={item} setValue={setItem} />
      {/* Add photo  */}
      <CustomInput
        placeholder="Description"
        onChangeText={(val) => setDescription(val)}
      />

      <CustomInput placeholder="Unit" onChangeText={(val) => setUnit(val)} />

      <CustomInput
      keyboardType = 'numeric'
  
        placeholder="Price per Unit"
        onChangeText={(val) => setPrice(val)}
      />

      {/* <TouchableOpacity style={styles.round1}>
          <Text onPress={onSaved}> Save</Text>
        </TouchableOpacity> */}

      <CustomButton
        text="Save"
        onPress={() => {
          onSaved;
          navigation.navigate("VendorDash2", { data: state });
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
  round1: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 50,
    backgroundColor: "blue",
  },
});
