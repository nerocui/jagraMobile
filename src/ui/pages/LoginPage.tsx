import React from 'react';
import { Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import styles from '../../style/login';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import * as Action from 'jagrastate/action';

const LoginPage = (props: any) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#808bff', '#ff1f93', ]} style={styles.header}>
                <Text style={styles.title}>Jagra</Text>
                <Text style={styles.subTitle}>Where Tasks Enpower People</Text>
            </LinearGradient>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>User Name</Text>
                <TextInput placeholder="username..." style={styles.input} />
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder="password..." style={styles.input} />
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
