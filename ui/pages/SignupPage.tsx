import React from 'react';
import { Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import styles from '../../style/login';
import { LinearGradient } from 'expo-linear-gradient';

const SignupPage = (props: any) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#808bff', '#ff1f93', ]} style={styles.header}>
                <Text style={styles.title}>Jagra</Text>
                <Text style={styles.join}>Join Today To Get a Better Handle of Your Tasks</Text>
            </LinearGradient>
            <View style={styles.inputContainer}>
            <Text style={styles.label}>User Name</Text>
                <TextInput placeholder="username..." style={styles.input} />
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder="password..." style={styles.input} />
                <Text style={styles.label}>Password Confirm</Text>
                <TextInput placeholder="password..." style={styles.input} />
                <TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Text>Signup</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => props.navigation.navigate('Login')}>
                    <View style={styles.link}>
                        <Text>Already Have an Account? Login Here.</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
};

export default SignupPage;
