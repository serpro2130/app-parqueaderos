// import { useRef, useState } from 'react';
// import { router } from 'expo-router';

// import ThemedButton from '@/components/ThemedButton';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// import {
//     View,
//     Text,
//     ImageSourcePropType,
//     Image,
//     useWindowDimensions,
//     NativeScrollEvent,
//     NativeSyntheticEvent,
// } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

// interface Slide {
//     // title: string;
//     // desc: string;
//     img: ImageSourcePropType;
// }

// const items: Slide[] = [
//     {
//         // title: 'Titulo 1',
//         // desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
//         img: require('../../../assets/images/slides/slide-1.png'),
//     },
//     {
//         // title: 'Titulo 2',
//         // desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
//         img: require('../../../assets/images/slides/slide-2.png'),
//     },
//     {
//         // title: 'Titulo 3',
//         // desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
//         img: require('../../../assets/images/slides/slide-3.png'),
//     },
// ];

// const SlidesScreen = () => {
//     const flatListRef = useRef<FlatList>(null);
//     const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//     const [isScrollEnabled, setIsScrollEnabled] = useState(false);

//     const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//         if (isScrollEnabled) {
//             return;
//         }

//         const { contentOffset, layoutMeasurement } = event.nativeEvent;

//         const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

//         setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

//         if (currentIndex === items.length - 1) {
//             setIsScrollEnabled(true);
//         }
//     };

//     const scrollToSlide = (index: number) => {
//         if (!flatListRef.current) return;

//         flatListRef.current.scrollToIndex({
//             index: index,
//             animated: true,
//         });
//     };
//     return (
//         <ThemedView>
//             <FlatList
//                 ref={flatListRef}
//                 data={items}
//                 keyExtractor={(item) => item.title}
//                 renderItem={({ item }) => <SlideItem item={item} />}
//                 horizontal
//                 pagingEnabled
//                 scrollEnabled={isScrollEnabled}
//                 onScroll={onScroll}
//             />

//             {/* {currentSlideIndex === items.length - 1 ? (
//                 // <ThemedButton
//                 //     //   className="absolute bottom-10 right-5 w-[150px]"
//                 //     onPress={() => router.back()}
//                 // >
//                 //     Finalizar
//                 // </ThemedButton>
//             // ) : (
//             //     <ThemedButton
//             //         //   className="absolute bottom-10 right-5 w-[150px]"
//             //         onPress={() => scrollToSlide(currentSlideIndex + 1)}
//             //     >
//             //         Siguiente
//             //     </ThemedButton>
//             )} */}
//         </ThemedView>
//     );
// };
// export default SlidesScreen;

// interface SlideItemProps {
//     item: Slide;
// }

// const SlideItem = ({ item }: SlideItemProps) => {
//     const { width } = useWindowDimensions();
//     const { img } = item;

//     return (
//         <ThemedView
//             // className="flex-1 rounded p-10 justify-center bg-red-500"
//             style={{ width }}
//         >
//             <Image
//                 source={img}
//                 style={{
//                     width: width * 1,
//                     height: width * 1.9,
//                     resizeMode: 'cover',
//                     alignSelf: 'center',
//                 }}
//             />

//             {/* <ThemedText
//                 // type="h1"
//                 className="text-light-primary dark:text-dark-primary"
//             >
//                 {title}
//             </ThemedText>

//             <ThemedText className="mt-10">{desc}</ThemedText> */}
//         </ThemedView>
//     );
// };
import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

// Definimos el tipo de datos para los slides
interface Slide {
    img: any; // El tipo `any` es para las imágenes requeridas localmente
}

// Definimos el array de items con las imágenes locales
const items: Slide[] = [
    { img: require('../../../assets/images/slides/slide-1.png') },
    { img: require('../../../assets/images/slides/slide-2.png') },
    { img: require('../../../assets/images/slides/slide-3.png') },
];

const SlidesScreen = () => {
    const { width } = Dimensions.get('window'); // Dimensiones de la ventana
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderItem = ({ item }: { item: Slide }) => (
        <View style={styles.imageContainer}>
            <Image
                source={item.img}
                style={[styles.image, { width: width * 0.9 }]} // Ajuste dinámico al ancho
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false} // Para eliminar el scroll bar
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContainer: {
        paddingVertical: 20, // Espaciado desde arriba y abajo
        paddingTop: 40, // Incrementa el espacio superior
    },
    imageContainer: {
        marginBottom: 20, // Espaciado entre imágenes
        alignItems: 'center', // Centrar imágenes
    },
    image: {
        height: 200, // Altura fija
        resizeMode: 'cover', // Ajustar la imagen dentro del contenedor
        borderRadius: 10, // Bordes redondeados
    },
});

export default SlidesScreen;
