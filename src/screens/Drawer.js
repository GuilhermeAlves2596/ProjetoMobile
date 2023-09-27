import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Home" component={Home} />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer