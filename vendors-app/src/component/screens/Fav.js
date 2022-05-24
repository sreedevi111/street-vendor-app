import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Fav = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Entypo
          style={{ marginRight: 315, marginTop: 70 }}
          name="menu"
          size={40}
          color="black"
        />
        <TextInput
          style={{
            height: 40,
            borderRadius: 10,
            width: "90%",
            fontSize: 15,
            marginTop: 5,
            borderWidth: 1,
            padding: 5,
          }}
          placeholder="Search"
        />

        <View>
          <Text
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 25,
              marginTop: 10,
              marginRight: 30,
            }}
          >
            Your Favorite Item And Shop
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Fav;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
