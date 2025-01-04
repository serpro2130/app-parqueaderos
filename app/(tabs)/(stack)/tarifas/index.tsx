import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Linking } from 'react-native';
import axios from 'axios';
import CustomButton from '@/components/shared/CustomButton';

const TarifasScreen = () => {
    const [tarifarioUrl, setTarifarioUrl] = useState<string | null>(null);

    // Función para obtener el tarifario
    const fetchTarifario = async () => {
        try {
            const response = await axios.get('https://parking.gestorservicios.store/api/getTarifario.php', {
                headers: {
                    Authorization: 'bG9naW4vcGFzc3dvcmQ=',
                },
            });

            if (response.data.correcto === 'SI' && response.data.tarifarios.length > 0) {
                setTarifarioUrl(response.data.tarifarios[0].tarifario);
            } else {
                Alert.alert('Error', 'No se pudo obtener el tarifario.');
            }
        } catch (error) {
            console.error('Error al obtener el tarifario:', error);
            Alert.alert('Error', 'No se pudo conectar al servidor.');
        }
    };

    // Llamada a la API cuando se carga la pantalla
    useEffect(() => {
        fetchTarifario();
    }, []);

    // Función para abrir el enlace del tarifario
    const handleDownload = () => {
        if (tarifarioUrl) {
            Linking.openURL(tarifarioUrl).catch((err) =>
                Alert.alert('Error', 'No se pudo abrir el PDF.')
            );
        } else {
            Alert.alert('Error', 'El tarifario no está disponible.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tarifario</Text>
            {tarifarioUrl ? (
                // <Button title="Descargar Tarifario" onPress={handleDownload} />
                <CustomButton
                    color="primary"
                    variant="contained"
                    onPress={handleDownload}
                >
                    Descargar Tarifario
                </CustomButton>
            ) : (
                <Text style={styles.message}>No hay tarifario disponible.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        color: 'gray',
    },
});

export default TarifasScreen;
