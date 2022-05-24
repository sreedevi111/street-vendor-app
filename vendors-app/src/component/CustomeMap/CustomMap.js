import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView from "react-native-maps";
import MapViewS from "./MapView";

import React from "react";

const CustomMap = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Icon name="map-marker" size={30} color="#900" />
            <Text style={styles.text}>Use Current Location</Text>
          </TouchableOpacity>
        </View>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data.description);
            }}
            query={{
              key: "AIzaSyCzCcQ55LcgZzZyy63hNJrCr7VTE47QeUI",
              language: "en",
            }}
            styles={{
              textInput: {
                backgroundColor: "#eee",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7,
              },
              textInputContainer: {
                backgroundColor: "#eee",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                width: 300,
              },
            }}
          />
        </View>
        <View>
          <MapViewS />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "orange",
    paddingRight: 110,
    marginBottom: 7,
  },
});

export default CustomMap;
