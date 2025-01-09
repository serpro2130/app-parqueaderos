import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, Button, StyleSheet, Alert, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para guardar el estado del usuario
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from '@/components/ThemedText';
import ThemedTextInput from '@/components/ThemedTextInput';
import ThemedButton from '@/components/ThemedButton';
import ThemedLink from '@/components/ThemedLink';

const LoginScreen = () => {
    const [login, setLogin] = useState('');
    const { height } = useWindowDimensions();
    const backgroundColor = useThemeColor({}, 'background')
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
                await AsyncStorage.setItem('username', response.data.nombreusuario); // Guarda el nombre
                console.log('Multas obtenidas:', response.data.contratos[0]?.multas);
                await AsyncStorage.setItem('multas1', JSON.stringify(response.data.contratos[0]?.multas || []));
                await AsyncStorage.setItem('multas2', JSON.stringify(response.data.contratos[1]?.multas || [])); // Multas
                await AsyncStorage.setItem('multas3', JSON.stringify(response.data.contratos[2]?.multas || []));// await AsyncStorage.setItem('vigencia', JSON.stringify(response.data.contratos[0] || {})); // Vigencia del plan
                // Guarda todas las multas
                //  await AsyncStorage.setItem(
                //     'multas',
                //     JSON.stringify(response.data.contratos.map((c) => c.multas).flat() || [])
                //   );

                // Guarda todos los contratos
                await AsyncStorage.setItem(
                    'contratos',
                    JSON.stringify(response.data.contratos || [])
                );
                // await AsyncStorage.setItem('userEmail', login); // Guarda el correo
                // await AsyncStorage.setItem('userPassword', password); // Guarda la contraseña
                router.push('/(parking-app)/(home)'); // Navegar a la pantalla Home
            } else {
                Alert.alert('Error', response.data.mensaje);
                // Alert.alert('Error', 'Credenciales incorrectas.');
            }
        } catch (error) {
            Alert.alert('Error', 'No se pudo conectar con el servidor.');
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
        >
            <ScrollView
                style={{
                    paddingHorizontal: 35,
                    backgroundColor: backgroundColor,
                }}
            >
                <View
                    style={{
                        paddingTop: height * 0.30,
                    }}
                >
                    <ThemedText type='title'>Ingresar</ThemedText>
                    <ThemedText style={{ color: 'gray' }}>Por favor ingrese para continuar</ThemedText>
                </View>
                {/* Email y Password */}
                <View style={{ marginTop: 20 }}>
                    <ThemedTextInput
                        placeholder="Correo electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        icon="mail-outline"
                        value={login}
                        onChangeText={setLogin}
                    />
                    <ThemedTextInput
                        placeholder="Contraseña"
                        secureTextEntry
                        autoCapitalize="none"
                        icon="lock-closed-outline"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                {/* Spacer */}
                <View style={{ marginTop: 10 }} />
                {/* <View style={styles.container}> */}
                {/* <Text style={styles.title}>Ingresar</Text> */}
                {/* <TextInput
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
                    /> */}
                {/* <Button title="Ingresar" onPress={handleLogin} /> */}
                {/* <Text style={styles.link} onPress={() => router.push('/auth/register')}>
                        ¿No tienes cuenta? Crear cuenta
                    </Text> */}
                {/* </View> */}
                {/* Botón */}
                <ThemedButton
                    icon="arrow-forward-outline"
                    onPress={handleLogin}
                // disabled={isPosting}
                >
                    Ingresar
                </ThemedButton>
                {/* Spacer */}
                <View style={{ marginTop: 50 }} />
                {/* Enlace a registro */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ThemedText>¿No tienes cuenta?</ThemedText>
                    <ThemedLink href="/auth/register" style={{ marginHorizontal: 5 }}>
                        Crear cuenta
                    </ThemedLink>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <ThemedText>¿Olvidaste tu contraseña?</ThemedText>
                    <ThemedLink href="/auth/change" style={{ marginHorizontal: 5 }}>
                        Cambiar contraseña
                    </ThemedLink>
                </View>


            </ScrollView>
        </KeyboardAvoidingView>
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
