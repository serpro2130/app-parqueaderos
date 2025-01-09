import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    // const [multas1, setMultas1] = useState<Multa[]>([]);
    // const [multas2, setMultas2] = useState<Multa[]>([]);

    useEffect(() => {
        const fetchMultas = async () => {
            try {
                const storedMultas = await AsyncStorage.getItem('multas');
                console.log('Multas recuperadas:', storedMultas);
                if (storedMultas) {
                    setMultas(JSON.parse(storedMultas) as Multa[]);
                }
            } catch (error) {
                console.error('Error al recuperar las multas:', error);
            }
        };

        fetchMultas();
        // const fetchMultas1 = async () => {
        //     try {
        //         const storedMultas = await AsyncStorage.getItem('multas2');
        //         console.log('Multas recuperadas:', storedMultas);
        //         if (storedMultas) {
        //             setMultas1(JSON.parse(storedMultas));
        //         }
        //     } catch (error) {
        //         console.error('Error al recuperar las multas:', error);
        //     }
        // };

        // fetchMultas1();
        // const fetchMultas2 = async () => {
        //     try {
        //         const storedMultas = await AsyncStorage.getItem('multas3');
        //         console.log('Multas recuperadas:', storedMultas);
        //         if (storedMultas) {
        //             setMultas2(JSON.parse(storedMultas));
        //         }
        //     } catch (error) {
        //         console.error('Error al recuperar las multas:', error);
        //     }
        // };

        // fetchMultas2();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Atención!!!</Text>
                {multas.length > 0 ? (
                    multas.map((multa, index) => (
                        <View key={index} style={styles.multaContainer}>
                            {/* <Text style={styles.message}>
                                Tarjeta: {multa.tarjeta || 'No disponible'}
                            </Text> */}
                            <Text style={styles.message}>
                                Fecha: {multa.fecha || 'No disponible'}
                            </Text>
                            <Text style={styles.message}>
                                Monto: ${multa.valor || 'No disponible'}
                            </Text>
                            <Text style={styles.details}>
                                Motivo: {multa.observaciones || 'No disponible'}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.message}>No tienes multas registradas.</Text>
                )}
                {/* {multas1.length > 0 ? (
                    multas1.map((multa, index) => (
                        <View key={index} style={styles.multaContainer}>
                            <Text style={styles.message}>
                                Tarjeta: {multa?.tarjeta || 'No disponible'}
                            </Text>
                            <Text style={styles.message}>
                                Fecha: {multa?.fecha || 'No disponible'}
                            </Text>
                            <Text style={styles.message}>
                                Monto: ${multa?.valor || 'No disponible'}
                            </Text>
                            <Text style={styles.details}>
                                Motivo: {multa?.observaciones || 'No disponible'}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.message}></Text>
                )}
                {multas2.length > 0 ? (
                    multas2.map((multa, index) => (
                        <View key={index} style={styles.multaContainer}>
                            <Text style={styles.message}>
                                Tarjeta: {multa?.tarjeta || 'No disponible'}
                            </Text>
                            <Text style={styles.message}>
                                Fecha: {multa?.fecha || 'No disponible'}
                            </Text>
                            <Text style={styles.message}>
                                Monto: ${multa?.valor || 'No disponible'}
                            </Text>
                            <Text style={styles.details}>
                                Motivo: {multa?.observaciones || 'No disponible'}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.message}></Text>
                )} */}
            </View>
        </ScrollView>
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
