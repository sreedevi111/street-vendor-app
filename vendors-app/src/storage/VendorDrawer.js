import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home  from "../component/Home";
// import VendorDash2 from "../component/VendorDash2";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator useLegacyImplementation initialRouteName="VendorDash2" screenOptions={{
          // headerShown: false,
       }}>
        {/* <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="My Dashboard" component={VendorDash2} /> */}
        <Drawer.Screen name="Home" component={Home} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
