import React from 'react';
import { View } from 'react-native';
import PersonaHeader from '../components/PersonaHeader';
import styles from '../../style/dashboard';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <PersonaHeader />
        </View>
    );
};

export default DashboardScreen;
