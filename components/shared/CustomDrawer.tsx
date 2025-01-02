import { View, Text } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false}>
            {/* Poner imágenes y texto */}
            <View style={styles.headerContainer}>
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>HA</Text>
                </View>
            </View>

            {/* Drawer Items */}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 40, // Aproximación para `mb-10`
        height: 150, // Aproximación para `h-[150px]`
        backgroundColor: '#007bff', // bg-primary
        borderRadius: 12, // rounded-xl
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // bg-white
        borderRadius: 100, // rounded-full
        height: 96, // Aproximación para `h-24`
        width: 96, // Aproximación para `w-24`
    },
    avatarText: {
        color: '#000000', // text-black
        fontSize: 24, // text-3xl
        fontWeight: 'bold', // font-work-black (puedes configurar una fuente personalizada si es necesario)
    },
});

export default CustomDrawer;
