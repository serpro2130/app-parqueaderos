import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const DrawerLayout = () => {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen
                    name="sesion/index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Sesion',
                        title: 'Cerrar sesión',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
        // <Drawer />
        // <View>
        //     <Text>Hola Mundo</Text>
        // </View>
    )
}

export default DrawerLayout