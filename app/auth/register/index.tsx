import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

const RegisterScreen = () => {
    const [nombreusuario, setNombreusuario] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [celular, setCelular] = useState('');
    const router = useRouter();

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/postCreateUser.php`, {
                nombreusuario,
                usuario,
                clave,
                celular,
            }, {
                headers: { Authorization: 'bG9naW4vcGFzc3dvcmQ=' },
            });
            if (response.data.correcto === 'SI') {
                Alert.alert('¡Éxito!', response.data.mensaje);
                router.push('/auth/login'); // Navega a la pantalla de login
            } else {
                Alert.alert('Error', 'No se pudo crear la cuenta.');
            }
        } catch (error) {
            Alert.alert('Error', 'No se pudo conectar con el servidor.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear cuenta</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={nombreusuario}
                onChangeText={setNombreusuario}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput
                style={styles.input}
                placeholder="Celular"
                value={celular}
                onChangeText={setCelular}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={clave}
                onChangeText={setClave}
            />
            <Button title="Crear cuenta" onPress={handleRegister} />
            <Text style={styles.link} onPress={() => router.push('/auth/login')}>
                ¿Ya tienes cuenta? Ingresar
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
    link: { color: 'blue', marginTop: 10, textAlign: 'center' },
});

export default RegisterScreen;
