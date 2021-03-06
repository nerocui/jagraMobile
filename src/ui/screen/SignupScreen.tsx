import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableNativeFeedback, KeyboardAvoidingView, NativeSyntheticEvent, TextInputChangeEventData  } from 'react-native';
import styles from '../../style/login';
import { LinearGradient } from 'expo-linear-gradient';
import Axios from 'axios';

const SignupPage = (props: any) => {
    const url = 'https://jagra.azurewebsites.net/api/auth/register';
    const [log, SetLog] = useState('');

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const [passwordConfirm, SetConfirmPassword] = useState('');
	const OnChangeUsername = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        e.preventDefault();
		SetUsername(e.nativeEvent.text);
	};
	const OnChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        e.preventDefault();
        SetPassword(e.nativeEvent.text);
    };
    const OnChangeConfirmPassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        e.preventDefault();
        SetConfirmPassword(e.nativeEvent.text);
    };
    useEffect(() => {
        if (password === passwordConfirm) {
            SetLog("");
        } else {
            SetLog("Passwords Must Match");
        }
    }, [password, passwordConfirm]);
    const Register = async (username: string, password: string) => {
        try {
            return await Axios.post(url, {username, password});
        } catch(err) {
            console.log('Failed to register, ', err);
            SetLog(err.toString());
        }
    };
	const OnSubmit = async () => {
        if (password !== passwordConfirm || username === '' || password === '') {
            SetLog("Invalid Entries");
            return;
        }
        props.navigation.navigate('Loading');
        const res = await Register(username, password);
        if (res && res.status === 201) {
            SetUsername('');
            SetPassword('');
            props.navigation.navigate('Login');
        } else {
            props.navigation.navigate('Signup');
            SetLog("Failed to Register");
        }
	};

    return (
        <KeyboardAvoidingView  style={styles.container} behavior="padding">
            <LinearGradient colors={['#808bff', '#ff1f93', ]} style={styles.header}>
                <Text style={styles.title}>
                    Jagra
                </Text>
                <Text style={styles.join}>
                    Join Today To Get a Better Handle of Your Tasks
                </Text>
            </LinearGradient>
            <View style={styles.inputContainer}>
            <Text style={styles.label}>User Name</Text>
                <TextInput
                    placeholder="username..."
                    style={styles.input}
                    value={username}
                    onChange={OnChangeUsername}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    textContentType="newPassword"
                    secureTextEntry
                    placeholder="password..."
                    style={styles.input}
                    value={password}
                    onChange={OnChangePassword}
                />
                <Text style={styles.label}>Password Confirm</Text>
                <TextInput
                    textContentType="newPassword"
                    secureTextEntry
                    placeholder="password..."
                    style={styles.input}
                    value={passwordConfirm}
                    onChange={OnChangeConfirmPassword}
                />
                <TouchableNativeFeedback onPress={OnSubmit}>
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
