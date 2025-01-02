import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para guardar el estado de autenticación

const CheckAuthenticationLayout = () => {
    const [isLoading, setIsLoading] = useState(true); // Cargando estado inicial
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

    useEffect(() => {
        const checkLogin = async () => {
            try {
                // Simula la lógica para verificar si el usuario está autenticado
                const loggedIn = await AsyncStorage.getItem('loggedIn'); // Busca en AsyncStorage si hay login
                if (loggedIn === 'true') {
                    setIsAuthenticated(true); // Usuario está autenticado
                } else {
                    setIsAuthenticated(false); // Usuario no autenticado
                }
            } catch (error) {
                console.error('Error checking login status:', error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false); // Finaliza el estado de carga
            }
        };

        checkLogin();
    }, []);

    if (isLoading) {
        // Muestra indicador de carga mientras verificamos el estado
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
            </View>
        );
    }

    if (!isAuthenticated) {
        // Redirige a la pantalla de login si no está autenticado
        return <Redirect href="/auth/login" />;
    }

    return (
        <Stack>
            <Stack.Screen
                name="(home)/index"
                options={{
                    title: 'Parqueaderos',
                }}
            />
            {/* <Stack.Screen
                name='noticias/index'
                options={{
                    title: 'Noticias',
                }}
            /> */}
        </Stack>
    );
};

export default CheckAuthenticationLayout;
