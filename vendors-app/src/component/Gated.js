import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const Gated = ({ navigation }) => {
 return (
   <SafeAreaView style={styles.wrapper}>
     <View>
       <Text>Successfully registered!</Text>
     </View>
     <Button
       title="Start over"
       onPress={() => navigation.replace("Home")}
       //
     />
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 wrapper: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },
});

export default Gated;