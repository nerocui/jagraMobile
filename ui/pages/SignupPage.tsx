import React, { useState } from 'react';
import { Text, View, TextInput, TouchableNativeFeedback, KeyboardAvoidingView  } from 'react-native';
import styles from '../../style/login';
import { LinearGradient } from 'expo-linear-gradient';
import Axios from 'axios';

const SignupPage = (props: any) => {
    const url = 'https://172.17.81.16:5001/api/auth/register';
    const [log, SetLog] = useState('');
    return (
        <KeyboardAvoidingView  style={styles.container} behavior="padding">
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
                <TouchableNativeFeedback onPress={() => {
                    SetLog("Sending Request...");
                    return Axios.post(url, {username: 'newuser', password: 'password'})
                        .then(res => {
                            console.log(res);
                            SetLog(res.toString());
                        })
                        .catch(err => {
                            console.log(err);
                            SetLog(err.toString());
                        });
                }}>
                    <View style={styles.button}>
                        <Text>Signup</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => props.navigation.navigate('Login')}>
                    <View style={styles.link}>
                        <Text>Already Have an Account? Login Here.</Text>
                    </View>
                </TouchableNativeFeedback>
                <View>
                    <Text>{log}</Text>
                </View>
            </View>
        </KeyboardAvoidingView >
    );
};

export default SignupPage;
