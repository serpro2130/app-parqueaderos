import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'green',
            headerShown: false,
            // tabBarStyle: {
            //     backgroundColor: 'black',
            // },
            // tabBarActiveBackgroundColor: 'blue',
        }}>
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Menú',
                    // headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="menu-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="noticias/index"
                options={{
                    title: 'Noticias',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="newspaper-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="parqueaderos/index"
                options={{
                    title: 'Parqueaderos',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="car-sport-outline" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;