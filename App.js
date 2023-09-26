import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AcoesPesquisa from "./telas/AcoesPesquisa";
import Agradecimento from "./telas/Agradecimento";
import Coleta from "./telas/Coleta";
import Drawer from "./telas/Drawer";
import Relatorio from "./telas/Relatorio";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AcoesPesquisa" screenOptions={{headerShown: false}}>
                <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
                <Stack.Screen name="Coleta" component={Coleta} />
                <Stack.Screen name="Agradecimento" component={Agradecimento} />
                <Stack.Screen name="Relatorio" component={Relatorio} />
                <Stack.Screen name="Drawer" component={Drawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App