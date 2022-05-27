import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../Config";

const Fetch = () => {
  const [users, setUser] = useState([]);
  const vendors = firebase.firestore().collection("vendors list");

  useEffect(async () => {
    vendors.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { address, shops, number } = doc.data();
        users.push({
          id: doc.id,
          address,
          shops,
          number,
        });
      });
      setUser(users);
    });
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <FlatList
        style={{ height: "100%" }}
        data={users}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemShops}>{item.shops}</Text>
              <Text style={styles.itemAddress}>{item.address}</Text>
              <Text style={styles.itemNumber}>{item.number}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Fetch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },

  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  itemAddress: {
    fontWeight: "300",
  },

  itemShops: {
    fontWeight: "bold",
  },

  itemNumber: {
    fontWeight: "300",
  },
});
// "firebase": "^9.8.1",
