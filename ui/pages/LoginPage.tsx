import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="User Name" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
            <TouchableNativeFeedback>
                <View style={styles.button}>
                    <Text>Login</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,
    },
    input: {
        borderWidth: 1,
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#4aff98',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default LoginPage;
