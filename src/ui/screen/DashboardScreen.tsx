import React from 'react';
import { View, ShadowPropTypesIOS } from 'react-native';
import PersonaHeader from '../components/PersonaHeader';
import styles from '../../style/dashboard';

const DashboardScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <PersonaHeader navigation={props.navigation}/>
        </View>
    );
};

export default DashboardScreen;
