import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import CustomShop from "./CustomShop";
import { GetShops } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native";
// import Logo from '../../../assets/Logo.png'

const Home = () => {
  const { shops } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // getData();
    dispatch(GetShops());
  }, []);
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
        <CustomShop />
        <FlatList
          data={shops}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={{ fontSize: 30, marginLeft: 5, color: "green" }}>
                {item.shop}
              </Text>
              <Text style={{ marginLeft: 5, fontSize: 20 }}>
                {item.address}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#ffffff",
    // borderWidth: 2,
    // borderColor: "#cccccc",
    borderRadius: 5,
    margin: 7,
    width: 350,
  },
});
