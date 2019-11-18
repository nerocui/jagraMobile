import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import styles from '../../style/login';
import { LinearGradient } from 'expo-linear-gradient';

const LoginPage = (props: any) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#ff1f93', '#808bff']} style={styles.header}>
                <Text style={styles.title}>Jagra</Text>
                <Text style={styles.subTitle}>Where Tasks Enpower People</Text>
            </LinearGradient>
            <View style={styles.inputContainer}>
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
        </View>
    );
};

export default LoginPage;
