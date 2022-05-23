import { Dimensions } from "react-native";
import MapView from "react-native-maps";

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MapViewS = () => {
  return (
    <View>
      <MapView
        style={styles.mapView}
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        showsUserLocation
        followsUserLocation
      />
    </View>
  );
};

export default MapViewS;

const styles = StyleSheet.create({
  mapView: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
