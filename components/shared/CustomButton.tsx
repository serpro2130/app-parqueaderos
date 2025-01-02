import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text-only';
    onPress?: () => void;
    onLongPress?: () => void;
    style?: object;
}

const CustomButton = React.forwardRef(
    (
        {
            children,
            color = 'primary',
            variant = 'contained',
            onPress,
            onLongPress,
            style,
        }: Props,
        ref: React.Ref<any>
    ) => {
        const btnColor = {
            primary: styles.primaryBackground,
            secondary: styles.secondaryBackground,
            tertiary: styles.tertiaryBackground,
        }[color];

        const textColor = {
            primary: styles.primaryText,
            secondary: styles.secondaryText,
            tertiary: styles.tertiaryText,
        }[color];

        if (variant === 'text-only') {
            return (
                <Pressable onPress={onPress} onLongPress={onLongPress} style={[styles.textOnly, style]} ref={ref}>
                    <Text style={[textColor, styles.text]}>{children}</Text>
                </Pressable>
            );
        }

        return (
            <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                style={[styles.button, btnColor, style]}
                ref={ref}
                android_ripple={{ color: '#ccc' }} // Para efecto ripple en Android (opcional)
            >
                <Text style={[textColor, styles.text]}>{children}</Text>
            </Pressable>
        );
    }
);

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        // activeOpacity: 0.9,
    },
    textOnly: {
        padding: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    primaryBackground: {
        backgroundColor: '#007bff',
    },
    secondaryBackground: {
        backgroundColor: '#6c757d',
    },
    tertiaryBackground: {
        backgroundColor: '#f8f9fa',
    },
    primaryText: {
        color: '#ffffff',
    },
    secondaryText: {
        color: '#ffffff',
    },
    tertiaryText: {
        color: '#000000',
    },
});

export default CustomButton;
