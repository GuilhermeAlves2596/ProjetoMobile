import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";

const DrawerNavigator = createDrawerNavigator();
import CustomDrawer from "../components/CustomDrawer";

const Drawer = props => {
    return (
        <DrawerNavigator.Navigator drawerContent={CustomDrawer} initialRouteName="Home" screenOptions={{drawerStyle: {backgroundColor: '#2B1F5C'},
        headerStyle: {backgroundColor: '#2B1D62'}, headerTintColor: '#FFFFFF'}}>
            <DrawerNavigator.Screen name=" " component={Home}
              options={{drawerItemStyle: {height: 0}}}
            />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer