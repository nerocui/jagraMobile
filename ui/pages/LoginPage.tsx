import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import styles from '../../style/login';

const LoginPage = (props: any) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="User Name" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
            <TouchableNativeFeedback>
                <View style={styles.button}>
                    <Text>Login</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => props.navigation.navigate('Signup')}>
                <View style={styles.link}>
                    <Text>Don't Have an Account? Signup Here.</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default LoginPage;
