import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View, Text, TextInput, Button, Alert, StyleSheet, useWindowDimensions } from 'react-native';
import axios from 'axios';
import { useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import ThemedLink from '@/components/ThemedLink';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedTextInput from '@/components/ThemedTextInput';
import ThemedButton from '@/components/ThemedButton';

const ChangePasswordScreen = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const backgroundColor = useThemeColor({}, 'background')

    const handlePasswordChange = async () => {
        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        if (!email || !newPassword || !confirmPassword) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        try {
            const response = await axios.post('https://tu-endpoint.com/change-password', {
                email,
                password: newPassword,
            });

            if (response.status === 200) {
                Alert.alert('Éxito', 'Contraseña actualizada correctamente');
                navigation.navigate('/auth/login'); // Redirigir al login
            } else {
                Alert.alert('Error', 'No se pudo actualizar la contraseña. Inténtelo más tarde.');
            }
        } catch (error) {
            Alert.alert('Error', 'Ocurrió un problema. Inténtelo más tarde.');
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
                        paddingTop: height * 0.26,
                    }}
                >
                    {/* <View style={styles.container}> */}
                    <ThemedText style={styles.title}>Cambiar Contraseña</ThemedText>
                    <ThemedTextInput
                        // style={styles.input}
                        placeholder="Correo electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        icon="mail-outline"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <ThemedTextInput
                        // style={styles.input}
                        placeholder="Nueva contraseña"
                        autoCapitalize="none"
                        icon="lock-closed-outline"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                    />
                    <ThemedTextInput
                        // style={styles.input}
                        placeholder="Confirmar nueva contraseña"
                        autoCapitalize="none"
                        icon="lock-closed-outline"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                    {/* <Button title="Actualizar Contraseña" onPress={handlePasswordChange} /> */}
                    {/* Spacer */}
                    <View style={{ marginTop: 10 }} />

                    {/* Botón */}
                    <ThemedButton
                        icon="arrow-forward-outline"
                    // onPress={handlePasswordChange}
                    //   disabled={isPosting}
                    >
                        Actualizar contraseña
                    </ThemedButton>
                    {/* Spacer */}
                    <View style={{ marginTop: 50 }} />

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
                    {/* </View> */}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
});

export default ChangePasswordScreen;
