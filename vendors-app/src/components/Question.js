import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-web";


const Question = ({navigation}) => {
  
  return (
    <View style={styles.body}>
      <Text style={styles.text}>LOCAL VENDORS</Text>
      <View style={{ marginBottom: 10,  width: 115,  }}>
        <TouchableOpacity></TouchableOpacity>
      <Button color="#0000ff" onPress={() => navigation.navigate("VendorSignUp")} title="vendor 🛍️" />
      </View>

      <Button color="#0000ff" onPress={() => navigation.navigate("ConsumerSignUp")}  title="consumer🚹 " />
 
      
    </View>
  );
}

export default Question

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
