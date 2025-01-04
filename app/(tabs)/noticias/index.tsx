import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, useWindowDimensions, StyleSheet } from 'react-native';
import axios from 'axios';
// Definimos el tipo de datos para las noticias
interface Noticia {
  noticia: string; // La URL de la imagen
}
const NoticiasScreen = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]); // Estado para las noticias
  const [loading, setLoading] = useState(true); // Estado de carga
  const { width } = useWindowDimensions(); // Dimensiones de la ventana

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('https://parking.gestorservicios.store/api/getNoticias.php', {
          headers: {
            Authorization: 'bG9naW4vcGFzc3dvcmQ=',
          },
          responseType: 'json',
        });

        if (response.data.correcto === 'SI' && Array.isArray(response.data.noticias)) {
          const noticiasLimpias = response.data.noticias.map((noticia: { noticia: string }) => ({
            ...noticia,
            noticia: noticia.noticia.replace(/\\/g, '/'), // Reemplaza las barras invertidas
          }));
          setNoticias(noticiasLimpias);
        } else {
          setNoticias([]);
        }
      } catch (error) {
        console.error('Error al obtener las noticias:', error);
        setNoticias([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  const renderItem = ({ item }: { item: Noticia }) => (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item.noticia }}
        style={[styles.image, { width: width * 0.9 }]} // Ajuste dinámico al ancho de la pantalla
      />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!noticias || noticias.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No hay noticias disponibles</Text>
      </View>
    );
  }

  return (

    <FlatList
      data={noticias}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer} // Aplica el espaciado adicional aquí
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  listContainer: {
    paddingVertical: 20,
    paddingTop: 40, // Espaciado adicional desde el inicio de la pantalla
  },
  imageContainer: {
    marginBottom: 20, // Espaciado entre imágenes
    alignItems: 'center',
  },
  image: {
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10, // Esquinas redondeadas
  },
});

export default NoticiasScreen;
