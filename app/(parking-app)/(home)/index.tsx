import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('loggedIn'); // Eliminar el estado de login
            Alert.alert('Sesión cerrada', 'Has cerrado sesión correctamente.');
            router.push('/auth/login'); // Redirigir al login
        } catch (error) {
            Alert.alert('Error', 'No se pudo cerrar sesión.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Cerrar sesión" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
