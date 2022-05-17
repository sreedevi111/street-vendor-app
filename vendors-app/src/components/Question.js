import { StyleSheet, Text, View, Button } from "react-native";

export default function Question() {
  
  return (
    <View style={styles.body}>
      <Text style={styles.text}>LOCAL VENDORS</Text>
      <View style={{ marginBottom: 10,  width: 115,  }}>
      <Button color="#0000ff" title="vendor 🛍️" />
      </View>

      <Button color="#0000ff" title="consumer🚹 " />
 

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1, 
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },

  buttonContainer: {
     height: 30,
     width: 30,
  }

  
});
