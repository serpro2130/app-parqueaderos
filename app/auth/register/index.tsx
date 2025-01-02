import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View, useWindowDimensions, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from '@/components/ThemedText';
import ThemedTextInput from '@/components/ThemedTextInput';
import ThemedButton from '@/components/ThemedButton';
import ThemedLink from '@/components/ThemedLink';

const RegisterScreen = () => {
    const [nombreusuario, setNombreusuario] = useState('');
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [celular, setCelular] = useState('');
    const router = useRouter();

    const { height } = useWindowDimensions();
    const backgroundColor = useThemeColor({}, 'background')

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
                        paddingTop: height * 0.26,
                    }}
                >
                    <ThemedText type='title'>Crear cuenta</ThemedText>
                    <ThemedText style={{ color: 'gray' }}>Por favor crea una cuenta para continuar</ThemedText>
                </View>
                {/* Email y Password */}
                <View style={{ marginTop: 20 }}>
                    <ThemedTextInput
                        placeholder="Nombre completo"
                        autoCapitalize="words"
                        icon="person-outline"
                        value={nombreusuario}
                        onChangeText={setNombreusuario}
                    />
                    <ThemedTextInput
                        placeholder="Correo electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        icon="mail-outline"
                        value={usuario}
                        onChangeText={setUsuario}
                    />
                    <ThemedTextInput
                        placeholder="Celular"
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                        icon="phone-portrait-outline"
                        value={celular}
                        onChangeText={setCelular}
                    />
                    <ThemedTextInput
                        placeholder="Contraseña"
                        secureTextEntry
                        autoCapitalize="none"
                        icon="lock-closed-outline"
                        value={clave}
                        onChangeText={setClave}
                    />
                </View>
                {/* Spacer */}
                <View style={{ marginTop: 10 }} />

                {/* Botón */}
                <ThemedButton
                    icon="arrow-forward-outline"
                    onPress={handleRegister}
                //   disabled={isPosting}
                >
                    Crear cuenta
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
                    <ThemedText>¿Ya tienes cuenta?</ThemedText>
                    <ThemedLink href="/auth/login" style={{ marginHorizontal: 5 }}>
                        Ingresar
                    </ThemedLink>
                </View>
                {/* <View style={styles.container}> */}
                {/* <Text style={styles.title}>Crear cuenta</Text> */}
                {/* <TextInput
                        style={styles.input}
                        placeholder="Nombre completo"
                        value={nombreusuario}
                        onChangeText={setNombreusuario}
                    /> */}
                {/* <TextInput
                        style={styles.input}
                        placeholder="Correo electrónico"
                        value={usuario}
                        onChangeText={setUsuario}
                    /> */}
                {/* <TextInput
                        style={styles.input}
                        placeholder="Celular"
                        value={celular}
                        onChangeText={setCelular}
                    /> */}
                {/* <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry
                        value={clave}
                        onChangeText={setClave}
                    /> */}
                {/* <Button title="Crear cuenta" onPress={handleRegister} /> */}
                {/* <Text style={styles.link} onPress={() => router.push('/auth/login')}>
                        ¿Ya tienes cuenta? Ingresar
                    </Text> */}
                {/* </View> */}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
// const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: 'center', padding: 20 },
//     title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
//     input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
//     link: { color: 'blue', marginTop: 10, textAlign: 'center' },
// });

