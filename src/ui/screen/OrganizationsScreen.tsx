import React from 'react';
import { View, Text } from 'react-native';
import BackHeader from '../components/header/BackHeader';
import screenStyles from '../../style/screen';

const OrganizationsScreen = (props: any) => {
    return (
        <View style={screenStyles.container}>
            <BackHeader navigation={props.navigation} title="Organizations"/>
        </View>
    );
};

export default OrganizationsScreen;
