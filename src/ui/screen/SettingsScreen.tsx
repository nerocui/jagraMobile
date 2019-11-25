import React from 'react';
import { View, Text } from 'react-native';
import BackHeader from '../components/BackHeader';
import styles from '../../style/screen';

const SettingsScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <BackHeader navigation={props.navigation} title="Settings"/>
        </View>
    );
};

export default SettingsScreen;
