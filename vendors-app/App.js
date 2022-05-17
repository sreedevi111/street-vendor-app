import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Question from './src/components/Question';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
     screenOptions={{
       header: () => null
      }}
     >
       <Stack.Screen 
       name="Question"
       component={Question}
      //  options={{
      //    header: () => null
      //  }}
       />
      
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
