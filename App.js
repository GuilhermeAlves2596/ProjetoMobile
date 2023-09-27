import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import Agradecimento from "./src/screens/Agradecimento";
import Coleta from "./src/screens/Coleta";
import Drawer from "./src/screens/Drawer";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import ModificarPesquisa from "./src/screens/ModificarPesquisa";
import NovaConta from "./src/screens/NovaConta";
import NovaPesquisa from "./src/screens/NovaPesquisa";
import RecuperarSenha from "./src/screens/RecuperarSenha";
import Relatorio from "./src/screens/Relatorio";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
                <Stack.Screen name="Agradecimento" component={Agradecimento} />
                <Stack.Screen name="Coleta" component={Coleta} />
                <Stack.Screen name="Drawer" component={Drawer} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
                <Stack.Screen name="NovaConta" component={NovaConta} />
                <Stack.Screen name="Nova Pesquisa" component={NovaPesquisa} />
                <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
                <Stack.Screen name="Relatorio" component={Relatorio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App