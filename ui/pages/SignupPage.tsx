import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import styles from '../../style/login';

const SignupPage = (props: any) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="User Name" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
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
    );
};

export default SignupPage;
