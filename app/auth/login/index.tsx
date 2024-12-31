import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para guardar el estado del usuario

const LoginScreen = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            // const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/postLogin.php`, {
            //     login,
            //     password,
            // });

            const response = await axios.post(
                `${process.env.EXPO_PUBLIC_API_URL}/postLogin.php`,
                { login, password },
                {
                    headers: {
                        Authorization: "bG9naW4vcGFzc3dvcmQ=",
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Respuesta del servidor:", response.data);
            if (response.data.correcto === 'SI') {
                Alert.alert('¡Bienvenido!', `Hola, ${response.data.nombreusuario}`);
                await AsyncStorage.setItem('loggedIn', 'true'); // Guardar estado de login en AsyncStorage
                router.push('/(parking-app)/(home)'); // Navegar a la pantalla Home
            } else {
                Alert.alert('Error', 'Credenciales incorrectas.');
            }
        } catch (error) {
            Alert.alert('Error', 'No se pudo conectar con el servidor.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresar</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo o usuario"
                value={login}
                onChangeText={setLogin}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Ingresar" onPress={handleLogin} />
            <Text style={styles.link} onPress={() => router.push('/auth/register')}>
                ¿No tienes cuenta? Crear cuenta
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    link: { color: 'blue', marginTop: 10, textAlign: 'center' },
});

export default LoginScreen;
