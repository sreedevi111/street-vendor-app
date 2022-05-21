import { StyleSheet, Text, View, Button } from "react-native";
// import { TouchableOpacity } from "react-native-web";
import { TouchableOpacity } from "react-native-gesture-handler";


const Question = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>LOCAL VENDORS</Text>
      <TouchableOpacity style={{ marginBottom: 10, width: 115 }}>
        <Button
          color="#0000ff"
          onPress={() => navigation.navigate("ItemAddList")}
          title="vendor 🛍️"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Button
          color="#0000ff"
          onPress={() => navigation.navigate("ConsumerSignUp")}
          title="consumer🚹 "
        />
      </TouchableOpacity>
    </View>
  );
};

export default Question;

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
});
