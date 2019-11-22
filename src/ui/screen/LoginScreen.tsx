import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableNativeFeedback, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import styles from '../../style/login';
import { LinearGradient } from 'expo-linear-gradient';
import { Login } from 'jagrastate/action';
import { State } from 'jagrastate/models';

const LoginPage = (props: any) => {
    const [log, SetLog] = useState('');

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
	const OnChangeUsername = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        e.preventDefault();
		SetUsername(e.nativeEvent.text);
	};
	const OnChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        e.preventDefault();
        SetPassword(e.nativeEvent.text);
    };
    useEffect(() => {
        if (props.token && props.token !== '') {
            SetLog(props.token);
        } else {
            SetLog("");
        }
    }, [props.token]);
    const OnSubmit = (e: any) => {
        SetLog("Loading...");
        e.preventDefault();
        props.Login(username, password);
    };
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#808bff', '#ff1f93', ]} style={styles.header}>
                <Text style={styles.title}>Jagra</Text>
                <Text style={styles.subTitle}>Where Tasks Enpower People</Text>
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
                    placeholder="password..."
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChange={OnChangePassword}
                />
                <TouchableNativeFeedback onPress={OnSubmit}>
                    <View style={styles.button}>
                        <Text>Login</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => props.navigation.navigate('Signup')}>
                    <View style={styles.link}>
                        <Text>Don't Have an Account? Signup Here.</Text>
                    </View>
                </TouchableNativeFeedback>
                <View>
                    <Text>{log}</Text>
                </View>
                <View>
                    <Text>{props.token}</Text>
                </View>
            </View>
        </View>
    );
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
		token: state.AuthState.token,
	};
}

export default connect(MapStateToProps, {Login})(LoginPage);
