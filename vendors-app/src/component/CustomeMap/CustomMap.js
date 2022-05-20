import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import Map from "./Map";
// import MapView from "react-native-maps";

import React from "react";

const CustomMap = () => {
  return (
    
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
                  key: 'AIzaSyCzCcQ55LcgZzZyy63hNJrCr7VTE47QeUI',
                  language: 'en',
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
              width: "100%",
            },
          }}
        />
         {/* <View>
           <MapView style={styles.mapView}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
           />
         </View> */}
      </View>
    </View>
    
    //  <View>
    //     <GooglePlacesAutocomplete style={styles.container}
    //     placeholder="search"
    //     onPress={(data, details = null) => {
    //       // 'details' is provided when fetchDetails = true
    //       console.log(data, details);
    //     }}
    //     query={{
    //       key: 'YOUR API KEY',
    //       language: 'en',
    //     }}

    //     />
    //     </View>
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
  // mapView: {
  //   height: 100,
  //   width: 100,
  // }
});

export default CustomMap;
