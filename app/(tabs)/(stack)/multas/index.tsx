import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Multa = {
    idmulta: string;
    tarjeta: string;
    fecha: string;
    valor: string;
    observaciones: string;
    estado: string;
};

const MultasScreen = () => {
    const [multas, setMultas] = useState<Multa[]>([]);

    useEffect(() => {
        const fetchMultas = async () => {
            try {
                const storedMultas = await AsyncStorage.getItem('multas');
                console.log('Multas recuperadas:', storedMultas);
                if (storedMultas) {
                    setMultas(JSON.parse(storedMultas));
                }
            } catch (error) {
                console.error('Error al recuperar las multas:', error);
            }
        };

        fetchMultas();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atención!!!</Text>
            {multas.length > 0 ? (
                multas.map((multa, index) => (
                    <View key={index} style={styles.multaContainer}>
                        <Text style={styles.message}>
                            Monto: ${multa?.valor || 'No disponible'}
                        </Text>
                        <Text style={styles.message}>
                            Tarjeta: {multa?.tarjeta || 'No disponible'}
                        </Text>
                        <Text style={styles.details}>
                            Motivo: {multa?.observaciones || 'No disponible'}
                        </Text>
                    </View>
                ))
            ) : (
                <Text style={styles.message}>No tienes multas registradas.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    multaContainer: {
        marginBottom: 15,
    },
    message: {
        fontSize: 16,
    },
    details: {
        fontSize: 14,
        color: 'gray',
    },
});

export default MultasScreen;
