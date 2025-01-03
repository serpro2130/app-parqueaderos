import { Stack } from 'expo-router'
import { View, Text } from 'react-native'

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen
                name='(parking-app)'
                options={{
                    title: 'Inicio'
                }}
            />
            <Stack.Screen
                name='noticias/index'
                options={{
                    title: 'Noticias'
                }}
            />
            <Stack.Screen
                name='tarifas/index'
                options={{
                    title: 'Tarifas'
                }}
            />
            <Stack.Screen
                name='vigencia/index'
                options={{
                    title: 'Vigencia del Plan'
                }}
            />
            <Stack.Screen
                name='parqueaderos/index'
                options={{
                    title: 'Parqueaderos'
                }}
            />
            <Stack.Screen
                name='multas/index'
                options={{
                    title: 'Multas'
                }}
            />

        </Stack>
    )
}

export default StackLayout