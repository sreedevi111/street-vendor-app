import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Question from "./src/component/Question";
import VendorSignUp from "./src/component/VendorSignUp";
import ConsumerSignUp from "./src/component/ConsumerSignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="Question" component={Question} />

        <Stack.Screen name="VendorSignUp" component={VendorSignUp} />

        <Stack.Screen name="ConsumerSignUp" component={ConsumerSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
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
