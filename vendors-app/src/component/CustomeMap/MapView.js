// import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MapViewS = () => {
  return (
    <View>
      <MapView
        style={styles.mapView}
        // initialRegion={{

        // }}
        showsUserLocation
        followsUserLocation
      >
        <Marker
          title={"hello"}
          description={"world"}
          coordinate={{
            latitude: 12.972442,
            longitude: 77.580643,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </MapView>

      <Text>MapView</Text>
    </View>
  );
};

export default MapViewS;

const styles = StyleSheet.create({
  mapView: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    width: "100%",
    height: 300,
  },
});
