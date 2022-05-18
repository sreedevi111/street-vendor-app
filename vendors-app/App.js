import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import Otp from './src/component/Otp';
import Gated from './src/component/Gated';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
       screenOptions={{
         headerShown: false,
       }}>
        <Stack.Screen name = "Home" component ={Home}/>
        <Stack.Screen name = "Otp" component ={Otp}/>
        <Stack.Screen name='Gated' component={Gated}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
