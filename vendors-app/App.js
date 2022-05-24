import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/component/Home";
import Otp from "./src/component/Otp";
import Gated from "./src/component/Gated";
import VendorDash1 from "./src/component/VendorDash1";
import ItemAddList from "./src/component/ItemAddList";
import Question from "./src/component/Question";
import VendorSignUp from "./src/component/VendorSignUp";
import ConsumerSignUp from "./src/component/ConsumerSignUp";
import ConsumerHomePage from "./src/component/ConsumerHomePage";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {/* <ItemAddList/> */}

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Gated" component={Gated} />
          <Stack.Screen name="Question" component={Question} />

          <Stack.Screen name="VendorSignUp" component={VendorSignUp} />

          <Stack.Screen name="ConsumerSignUp" component={ConsumerSignUp} />
          <Stack.Screen name="VendorDash1" component={VendorDash1} />
          <Stack.Screen name="ConsumerHomePage" component={ConsumerHomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     margin: 10,
//   }
// });
