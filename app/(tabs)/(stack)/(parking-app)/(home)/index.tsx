import React from 'react';
import { View, Button, Alert, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '@/components/shared/CustomButton';
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
        <SafeAreaView>
            <View style={styles.container1}>
                {/* logo */}
                <Image
                    source={require('../../../../../assets/logo.png')} // Asegúrate de colocar el logo en la carpeta assets
                    style={styles.logo}
                />
                <CustomButton
                    color="primary"
                    variant="contained"
                    onPress={() => router.push('/noticias')}
                >
                    Noticias
                </CustomButton>
                <CustomButton
                    color="secondary"
                    variant="contained"
                    onPress={() => router.push('/tarifas')}
                >
                    Tarifas
                </CustomButton>
                <CustomButton
                    color="primary"
                    variant="contained"
                    onPress={() => router.push('/vigencia')}
                >
                    Vigencia
                </CustomButton>
                <CustomButton
                    color="secondary"
                    variant="contained"
                    onPress={() => router.push('/parqueaderos')}
                >
                    Parqueaderos
                </CustomButton>
                <CustomButton
                    color="tertiary"
                    variant="contained"
                    onPress={() => router.push('/multas')}
                >
                    Multas
                </CustomButton>
                <Button title="Cerrar sesión" onPress={handleLogout} />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container1: {
        paddingHorizontal: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    espace: {
        marginBottom: 50
    },
    text: {
        marginBottom: 20, // mb-5 en Tailwind → 5 unidades * 4 píxeles = 20px
    },
    logo: {
        width: 300, // Ajustar el tamaño según sea necesario
        height: 120, // Ajustar el tamaño según sea necesario
        marginBottom: 20, // Espaciado entre el logo y el botón
    },
});
export default HomeScreen;
