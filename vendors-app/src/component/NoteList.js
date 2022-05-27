import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Switch, FlatList, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import db from "../../firebase";

function useLists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      const lists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLists(lists);
    });
  }, []);
  return lists;
}
const NoteLists = () => {
  const lists = useLists();
  const handleOnDelete = (id) => {
    db.collection("users").doc(id).delete();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {lists.map((list) => {
          return (
            <View style={styles.card}>
              <View>
                <Text style={styles.item}>{list.item}</Text>
              </View>
              <View>
                <Text style={styles.unit}>Unit:{list.unit}</Text>
              </View>
              <View>
                <Text style={styles.price}>{list.price}</Text>
              </View>

              <View   />
              <Button onPress={() => handleOnDelete(list.item)}  title="Click here"/>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NoteLists;

const styles = StyleSheet.create({
  container: {
    height: 500,
    marginTop: 25,
    marginLeft: 20,
    borderWidth: 2,
  },
  card: {
    marginTop: 35,
    // flexDirection: "row",
    height: 80,
    width: 200,
    borderWidth: 2,
    padding: 10,
  },
  item: {
    fontSize: 20,
    marginLeft: 8,
    fontWeight: "bold",
    color: "brown",
  },
  unit: {
    marginLeft: 20,
  },
  price: {
    marginLeft: 20,
  },
});
