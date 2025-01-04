// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// type Contrato = {
//     tarjeta: string;
//     fechacontratacion: string;
//     modoverificacion: string;
// };

// const VigenciaScreen = () => {
//     const [vigencia, setVigencia] = useState<Contrato | null>(null);

//     const fetchVigenciaData = async () => {
//         try {
//             // Simulando obtener datos del API
//             const parsedData = {
//                 contratos: [
//                     {
//                         tarjeta: '11919979',
//                         fechacontratacion: '2024-10-01 00:00:00',
//                         modoverificacion: '2024-12-31 00:00:00',
//                     },
//                 ],
//             };
//             const contrato = parsedData.contratos?.[0]; // Primer contrato
//             console.log('Contrato obtenido:', contrato);
//             setVigencia(contrato);
//         } catch (error) {
//             console.error('Error al obtener la información de vigencia:', error);
//         }
//     };

//     useEffect(() => {
//         fetchVigenciaData();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Atención!!!</Text>
//             {vigencia ? (
//                 <View style={styles.infoContainer}>
//                     <Text style={styles.message}>Tarjeta: {vigencia.tarjeta}</Text>
//                     <Text style={styles.message}>Fecha de inicio: {vigencia.fechacontratacion}</Text>
//                     <Text style={styles.message}>Vigencia hasta: {vigencia.modoverificacion}</Text>
//                 </View>
//             ) : (
//                 <Text style={styles.message}>No hay vigencias disponibles.</Text>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     infoContainer: {
//         alignItems: 'center',
//     },
//     message: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
// });

// export default VigenciaScreen;
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// type Contrato = {
//     tarjeta: string;
//     fechacontratacion: string;
//     modoverificacion: string;
// };


// const VigenciaScreen = () => {
//     const [vigencia, setVigencia] = useState<Contrato | null>(null);

//     // Función para obtener los datos de vigencia desde la API
//     const fetchVigenciaData = async () => {
//         try {
//             const email = await AsyncStorage.getItem('userEmail');
//             const password = await AsyncStorage.getItem('userPassword');

//             if (!email || !password) {
//                 console.error('No se encontraron credenciales.');
//                 return;
//             }

//             const response = await fetch('https://parking.gestorservicios.store/api/postLogin.php', {
//                 method: 'POST',
//                 headers: {
//                     Authorization: 'bG9naW4vcGFzc3dvcmQ=',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ login: email, password }),
//             });

//             const parsedData = await response.json();
//             if (parsedData.correcto === 'SI' && parsedData.contratos?.length > 0) {
//                 const contrato: Contrato = parsedData.contratos[0]; // Obtén el primer contrato
//                 setVigencia(contrato);
//             } else {
//                 console.error('No hay contratos disponibles.');
//                 setVigencia(null);
//             }
//         } catch (error) {
//             console.error('Error al obtener la información de vigencia:', error);
//         }
//     };

//     useEffect(() => {
//         fetchVigenciaData(); // Llama a la API cuando se carga la pantalla
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Vigencia</Text>
//             {vigencia ? (
//                 <View style={styles.infoContainer}>
//                     <Text style={styles.message}>Tarjeta: {vigencia.tarjeta}</Text>
//                     <Text style={styles.message}>Fecha de contratación: {vigencia.fechacontratacion}</Text>
//                     <Text style={styles.message}>Vigencia hasta: {vigencia.modoverificacion}</Text>
//                 </View>
//             ) : (
//                 <Text style={styles.message}>No hay vigencias disponibles.</Text>
//             )}
//         </View>
//     );

// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     infoContainer: {
//         marginTop: 20,
//     },
//     message: {
//         fontSize: 18,
//         marginBottom: 10,
//         textAlign: 'center',
//     },
// });

// export default VigenciaScreen;
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const VigenciaScreen = () => {
//     const [vigencia, setVigencia] = useState(null);
//     useEffect(() => {
//         const fetchVigencia = async () => {
//             try {
//                 const storedVigencia = await AsyncStorage.getItem('vigencia');
//                 if (storedVigencia) {
//                     setVigencia(JSON.parse(storedVigencia));
//                 }
//             } catch (error) {
//                 console.error('Error al recuperar la vigencia:', error);
//             }
//         };

//         fetchVigencia();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Vigencia</Text>
//             {vigencia ? (
//                 <View style={styles.infoContainer}>
//                     <Text style={styles.message}>Tarjeta: {vigencia.tarjeta}</Text>
//                     <Text style={styles.message}>
//                         Fecha de contratación: {vigencia.fechacontratacion}
//                     </Text>
//                     <Text style={styles.message}>
//                         Vigencia hasta: {vigencia.modoverificacion}
//                     </Text>
//                 </View>
//             ) : (
//                 <Text style={styles.message}>No hay vigencias disponibles.</Text>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     infoContainer: {
//         marginBottom: 15,
//     },
//     message: {
//         fontSize: 16,
//     },
// });

// export default VigenciaScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Define el tipo de vigencia
// type Vigencia = {
//     tarjeta: string;
//     fechacontratacion: string;
//     modoverificacion: string;
// };

// const VigenciaScreen = () => {
//     const [vigencia, setVigencia] = useState<Vigencia | null>(null);

//     useEffect(() => {
//         const fetchVigencia = async () => {
//             try {
//                 const storedVigencia = await AsyncStorage.getItem('vigencia');
//                 if (storedVigencia) {
//                     setVigencia(JSON.parse(storedVigencia) as Vigencia);
//                 }
//             } catch (error) {
//                 console.error('Error al recuperar la vigencia:', error);
//             }
//         };

//         fetchVigencia();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Vigencia</Text>
//             {vigencia ? (
//                 <View style={styles.infoContainer}>
//                     <Text style={styles.message}>Tarjeta: {vigencia.tarjeta}</Text>
//                     <Text style={styles.message}>
//                         Fecha de contratación: {vigencia.fechacontratacion}
//                     </Text>
//                     <Text style={styles.message}>
//                         Vigencia hasta: {vigencia.modoverificacion}
//                     </Text>
//                 </View>
//             ) : (
//                 <Text style={styles.message}>No hay vigencias disponibles.</Text>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     infoContainer: {
//         marginBottom: 15,
//     },
//     message: {
//         fontSize: 16,
//     },
// });

// export default VigenciaScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tipo de contrato
type Contrato = {
    tarjeta: string;
    fechacontratacion: string;
    modoverificacion: string;
};

const VigenciaScreen = () => {
    const [contratos, setContratos] = useState<Contrato[]>([]);

    useEffect(() => {
        const fetchContratos = async () => {
            try {
                const storedContratos = await AsyncStorage.getItem('contratos');
                if (storedContratos) {
                    setContratos(JSON.parse(storedContratos) as Contrato[]);
                }
            } catch (error) {
                console.error('Error al recuperar los contratos:', error);
            }
        };

        fetchContratos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vigencia</Text>
            {contratos.length > 0 ? (
                contratos.map((contrato, index) => (
                    <View key={index} style={styles.infoContainer}>
                        <Text style={styles.message}>Tarjeta: {contrato.tarjeta}</Text>
                        <Text style={styles.message}>
                            Fecha de contratación: {contrato.fechacontratacion}
                        </Text>
                        <Text style={styles.message}>
                            Vigencia hasta: {contrato.modoverificacion}
                        </Text>
                    </View>
                ))
            ) : (
                <Text style={styles.message}>No hay vigencias disponibles.</Text>
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
    infoContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    message: {
        fontSize: 16,
    },
});

export default VigenciaScreen;
