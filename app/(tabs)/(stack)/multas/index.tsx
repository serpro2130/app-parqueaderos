// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Alert } from "react-native";
// import { useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// type Multa = {
//     idmulta: string;
//     tarjeta: string;
//     fecha: string;
//     valor: string;
//     observaciones: string;
//     estado: string;
// };

// const MultasScreen = () => {
//     const [multa, setMulta] = useState<Multa | null>(null);
//     const [tarjeta, setTarjeta] = useState("");
//     const router = useRouter();

//     // Función para recuperar datos de la API
//     const fetchMultaData = async () => {
//         try {
//             const loginData = await AsyncStorage.getItem("loggedUser");
//             const userData = loginData ? JSON.parse(loginData) : null;

//             if (!userData) {
//                 Alert.alert("Error", "No se encontró información del usuario.");
//                 return;
//             }

//             const response = await axios.post(
//                 "https://parking.gestorservicios.store/api/postLogin.php",
//                 {
//                     login: userData.usuario, // Usa el correo almacenado en AsyncStorage
//                     password: userData.password, // O la contraseña almacenada
//                 },
//                 {
//                     headers: {
//                         Authorization: "bG9naW4vcGFzc3dvcmQ=",
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             if (response.data && response.data.contratos.length > 0) {
//                 const contrato = response.data.contratos[0]; // Usamos el primer contrato
//                 setTarjeta(contrato.tarjeta);

//                 if (contrato.multas && contrato.multas.length > 0) {
//                     setMulta(contrato.multas[0]); // Usamos la primera multa
//                 } else {
//                     setMulta(null); // Si no hay multas
//                 }
//             } else {
//                 Alert.alert("Sin datos", "No se encontraron multas para este usuario.");
//             }
//         } catch (error) {
//             console.error("Error al recuperar las multas: ", error);
//             Alert.alert("Error", "No se pudieron recuperar las multas.");
//         }
//     };

//     // Llamar a la API al cargar la pantalla
//     useEffect(() => {
//         fetchMultaData();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Multas</Text>
//             {multa ? (
//                 <View>
//                     <Text style={styles.message}>
//                         Tienes una multa de: ${multa.valor}
//                     </Text>
//                     <Text style={styles.message}>Tarjeta: {tarjeta}</Text>
//                     <Text style={styles.details}>Motivo: {multa.observaciones}</Text>
//                 </View>
//             ) : (
//                 <Text style={styles.message}>
//                     No tienes multas registradas en este momento.
//                 </Text>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20,
//     },
//     message: {
//         fontSize: 18,
//         marginBottom: 10,
//         textAlign: "center",
//     },
//     details: {
//         fontSize: 16,
//         color: "gray",
//         textAlign: "center",
//     },
// });

// export default MultasScreen;
// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Alert } from "react-native";
// import axios from "axios";

// type Multa = {
//     idmulta: string;
//     tarjeta: string;
//     fecha: string;
//     valor: string;
//     observaciones: string;
//     estado: string;
// };

// const MultasScreen = () => {
//     const [multa, setMulta] = useState<Multa | null>(null);
//     const [tarjeta, setTarjeta] = useState("");

//     const fetchMultaData = async () => {
//         try {
//             const response = await axios.post(
//                 "https://parking.gestorservicios.store/api/postLogin.php",
//                 {
//                     login: "edwin.alcivar@gmail.com",
//                     password: "987654",
//                 },
//                 {
//                     headers: {
//                         Authorization: "bG9naW4vcGFzc3dvcmQ=",
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             if (response.data && response.data.contratos.length > 0) {
//                 const contrato = response.data.contratos[0]; // Usamos el primer contrato
//                 setTarjeta(contrato.tarjeta);

//                 if (contrato.multas && contrato.multas.length > 0) {
//                     setMulta(contrato.multas[0]); // Usamos la primera multa
//                 } else {
//                     setMulta(null); // Si no hay multas
//                 }
//             } else {
//                 Alert.alert("Sin datos", "No se encontraron multas para este usuario.");
//             }
//         } catch (error) {
//             console.error("Error al recuperar las multas: ", error);
//             Alert.alert("Error", "No se pudieron recuperar las multas.");
//         }
//     };

//     useEffect(() => {
//         fetchMultaData();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Atención!!!</Text>
//             {multa ? (
//                 <View>
//                     <Text style={styles.message}>
//                         Tienes una multa de: ${multa.valor}
//                     </Text>
//                     <Text style={styles.message}>Tarjeta: {tarjeta}</Text>
//                     <Text style={styles.details}>Motivo: {multa.observaciones}</Text>
//                 </View>
//             ) : (
//                 <Text style={styles.message}>
//                     No tienes multas registradas en este momento.
//                 </Text>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20,
//     },
//     message: {
//         fontSize: 18,
//         marginBottom: 10,
//         textAlign: "center",
//     },
//     details: {
//         fontSize: 16,
//         color: "gray",
//         textAlign: "center",
//     },
// });

// export default MultasScreen;
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
