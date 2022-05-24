import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import Otp from './src/component/Otp';
// import Gated from './src/component/Gated';
import VendorDash1 from './src/component/VendorDash1'
import ItemAddList from './src/component/ItemAddList';
import Question from "./src/component/Question";
import VendorSignUp from "./src/component/VendorSignUp";
import ConsumerSignUp from "./src/component/ConsumerSignUp";
import VendorDash2 from './src/component/VendorDash2';
import MyDrawer from './src/storage/VendorDrawer';
import ButtonDash from './src/component/ButtonDash';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer >
      
      {/* <ItemAddList/> */}
     
      <Stack.Navigator initialRouteName="Home"
       screenOptions={{
         headerShown: false,
       }} >
          
        {/* <Stack.Screen name = "Home" component ={Home}/>
         <Stack.Screen name = "Otp" component ={Otp}/>
        
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="VendorSignUp" component={VendorSignUp} />
         <Stack.Screen name="ConsumerSignUp" component={ConsumerSignUp} /> */}
        {/* <Stack.Screen name='VendorDash1' component={VendorDash1}/> */}
        <Stack.Screen name='ItemAddList' component={ItemAddList}/>
        <Stack.Screen name ='ButtonDash' component={ButtonDash}/>
        <Stack.Screen name='VendorDash2' component={VendorDash2}/>

      </Stack.Navigator> 
    </NavigationContainer>
   
  );
}

